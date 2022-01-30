import React, {useState} from 'react';

const InputAtom = (props) => {
  
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        props.onChange(e.target.value);
    }

    return (
        <div>
            <input placeholder={props.placeholder} value={value} type={props.type} onChange={props.onChange}></input>
        </div>
    );
};

export default InputAtom;
