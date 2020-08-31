import React, {useState} from 'react';
import CheckboxParent from './checkBoxParent';


const typeOfRoofing = ['Residential Roofing', 'Commercial Roofing', 'Shingle Roofing', 'Tile Roofing', 'Metal Roofing', 'Flat Roofing', 'Slate Roofing', 'Solar Roofing'];
const roofService = ['Roof Replacement','Roof Repair', 'Roof Cleaning', 'Roof Maintenance', 'Roof Financing', 'Roof Inspection', 'Solar Roof'];
const repairServices = ['Gutter Repair', 'Storm Damage Repair','Roof Damage Repair'];
const otherServices = ['Attic Insulation', 'Roof Maxx', 'Gutter Installation', 'Seamless Gutters', 'Skylight Installation', 'Emergency Roofing', 'Leaky Roof'];

const CheckBoxForm = () => 
{
    const [selected, setSelected] = useState([]);

    const styleParent = {
        textAlign:"center",
    }

    const styleContainerCheckBoxParent = {
        display:"flex", 
        justifyContent:"spaceBetween",
    }
    
    return (
        <div style={styleParent}>
            <h2>Keywords: </h2>
            <p>For best performance try to only target 3</p>
            <p>{selected.toString()}</p>
            <div style={styleContainerCheckBoxParent}>
                <CheckboxParent listOfKeywords={typeOfRoofing} subTitle='Type of Roofing' selectedList={selected} selectedListStateFunction={setSelected} />
                <CheckboxParent listOfKeywords={roofService} subTitle='Roof Service(s)' selectedList={selected} selectedListStateFunction={setSelected} />
                <CheckboxParent listOfKeywords={otherServices} subTitle='Other Service(s)' selectedList={selected} selectedListStateFunction={setSelected} />
                <CheckboxParent listOfKeywords={repairServices} subTitle='Repair Services' selectedList={selected} selectedListStateFunction={setSelected} />
            </div>
        </div>
    );
}

export default CheckBoxForm;