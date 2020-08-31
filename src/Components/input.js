import React from 'react';

const Input = ({headerText, inputVar, setInputVar}) => 
{

    const inputStyle = {
        width:"100%",
    }

    const containerStyle = {
        margin:"20px",
        textAlign:"left"
    }
    
    const setInput = (event) => 
    {
        setInputVar(event.target.value);
    }

    return(
        <div style={containerStyle}>
            <h2>{headerText}</h2>
            <input style={inputStyle} value={inputVar} onChange={setInput} />
        </div>
    );
}

export default Input;