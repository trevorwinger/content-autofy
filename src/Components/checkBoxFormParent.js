import React from 'react';
import CheckBoxForm from './checkBoxForm';

const CheckboxFormParent = ({kwList, setKwList}) => {
    const styleContainer = {
        textAlign:"center",
        justifyContent:"center",
    }

    return(
        <div style={styleContainer}>
            <h3>Keywords:</h3>
            <p>{kwList.toString()}</p>
            <CheckBoxForm  kw={kwList} setKw={setKwList} />
        </div>
    )
}

export default CheckboxFormParent;