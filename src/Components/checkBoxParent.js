import React from 'react';
import SubCheckbox from './subCheckbox';

const CheckboxParent = ({listOfKeywords, subTitle, selectedList, selectedListStateFunction}) => {
    const styleDiv = {
        flex:0,
        textAlign:"center",
        margin:5, 

    }

    const subTitleStyle={
        textAlign:"left",
    }
    return(
        <div style={styleDiv}>
            <h5 style={subTitleStyle}>{subTitle}</h5>
            {
                listOfKeywords.map((kw => 
                <SubCheckbox kw={kw} selected={selectedList} setSelected={selectedListStateFunction}/>))
            }
        </div>
    )
}

export default CheckboxParent;