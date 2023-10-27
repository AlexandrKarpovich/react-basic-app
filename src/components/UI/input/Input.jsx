import classes from "./Input.module.css";

function Input(props) {
    return (
        <div>
            <input {...props} className={classes.myInput} />
        </div>
    );
}

export default Input;