import React from 'react';
import CheckBoxForm from './checkBoxForm';

const CheckboxFormParent = ({kwList, setKwList, mBrand, setMBrand}) => {
    const styleContainer = {
        textAlign:"center",
        justifyContent:"center",
    }

    return(
        <div style={styleContainer}>
            <h3>Keywords</h3>
            <p>{kwList.toString()}</p>
            <p>{mBrand}</p>
            <CheckBoxForm  kw={kwList} setKw={setKwList} mBrand={mBrand} setMBrand={setMBrand}/>
        </div>
    )
}

export default CheckboxFormParent;