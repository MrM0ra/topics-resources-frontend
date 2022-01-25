import React, {useState} from 'react';

const InputAtom = (props) => {
  
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <div>
            <input placeholder={props.placeholder} value={value} onChange={(e)=>setValue(e.target.value)}></input>
        </div>
    );
};

export default InputAtom;
