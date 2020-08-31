import React from 'react';
import CheckboxParent from './checkBoxParent';


const typeOfRoofing = ['Residential Roofing', 'Commercial Roofing', 'Shingle Roofing', 'Tile Roofing', 'Metal Roofing', 'Flat Roofing', 'Slate Roofing', 'Solar Roofing'];
const roofService = ['Roof Replacement','Roof Repair', 'Roof Cleaning', 'Roof Maintenance', 'Roof Financing', 'Roof Inspection', 'Solar Roof'];
const repairServices = ['Gutter Repair', 'Storm Damage Repair','Roof Damage Repair'];
const otherServices = ['Attic Insulation', 'Roof Maxx', 'Gutter Installation', 'Seamless Gutters', 'Skylight Installation', 'Emergency Roofing', 'Leaky Roof'];

const CheckBoxForm = ({kw, setKw}) => 
{
    const styleContainerCheckBoxParent = {
        width:"100%",
        display:"flex", 
        justifyContent:"spaceBetween",
        padding:"5px",
        margin:"0 auto",   
    }
    
    return (
        <div style={styleContainerCheckBoxParent}>
            <CheckboxParent listOfKeywords={typeOfRoofing} subTitle='Type of Roofing' selectedList={kw} selectedListStateFunction={setKw} />
            <CheckboxParent listOfKeywords={roofService} subTitle='Roof Service(s)' selectedList={kw} selectedListStateFunction={setKw} />
            <CheckboxParent listOfKeywords={otherServices} subTitle='Other Service(s)' selectedList={kw} selectedListStateFunction={setKw} />
            <CheckboxParent listOfKeywords={repairServices} subTitle='Repair Services' selectedList={kw} selectedListStateFunction={setKw} />
        </div>
    );
}

export default CheckBoxForm;