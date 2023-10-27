import {useState} from "react";

function Input() {
    const [value, setValue] = useState('1sfi3;s')
    // console.log(value)
    // console.log(setValue)
    return (
        <>
            <h3>{value}</h3>
            <input
                type='text'
                value={value}
                onChange={e => setValue(e.target.value)} />
        </>
    );
}

export default Input;