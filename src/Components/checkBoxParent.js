import React from 'react';
import SubCheckbox from './subCheckbox';

const CheckboxParent = ({listOfKeywords, subTitle, selectedList, selectedListStateFunction}) => {
    const styleDiv = {
        width:"100%",
        justifyContent:"center",
        textAlign:"left",
        float:"center"
    }

    const subTitleStyle={
        float:"center",
    }

    const subCbStyle = {
        textAlign:"left",
    }
    
    return(
        <div style={styleDiv}>
            <h4 style={subTitleStyle}>{subTitle}</h4>
            <div style={subCbStyle}>
            {
                listOfKeywords.map((kw => 
                <SubCheckbox kw={kw} selected={selectedList} setSelected={selectedListStateFunction}/>))
            }
            </div>
        </div>
    )
}

export default CheckboxParent;