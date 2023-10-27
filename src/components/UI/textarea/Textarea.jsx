import React from "react";
import classes from "./Textarea.module.css";

const Textarea = React.forwardRef((props, ref) => {
    return (
        <div>
            <textarea ref={ref} {...props}  className={classes.myTextarea} />
        </div>
    );
})

export default Textarea;