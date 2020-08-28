import React from 'react';

const Input = ({headerText, inputVar, setInputVar}) => 
{

    const setInput = (event) => 
    {
        setInputVar(event.target.value);
    }

    return(
        <div>
            <h2>{headerText}</h2>
            <input value={inputVar} onChange={setInput} />
        </div>
    );
}

export default Input;