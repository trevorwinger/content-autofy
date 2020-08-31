import React, {useState} from 'react';
import CheckboxParent from './checkBoxParent';


const typeOfRoofing = ['Residential Roofing', 'Commercial Roofing', 'Shingle Roofing', 'Tile Roofing', 'Metal Roofing', 'Flat Roofing', 'Slate Roofing', 'Solar Roofing'];
const roofService = ['Roof Replacement','Roof Repair', 'Roof Cleaning', 'Roof Maintenance', 'Roof Financing', 'Roof Inspection', 'Solar Roof']  
const otherServices = ['Attic Insulation', 'Roof Maxx', 'Gutter Repair', 'Gutter Installation', 'Seamless Gutters', 'Skylight Installation', 'Storm Damage Repair', 'Emergency Roofing','Roof Damage Repair', 'Leaky Roof'];

const CheckBoxForm = () => 
{
    const [selected, setSelected] = useState([]);

    const styleContainer = {
        display:"flex", 
        justifyContent:"spaceBetween",
        textAlign:"center",
    }
    
    return (
        <div>
            <h2>Keywords: </h2>
            <p>For best performance try to only target 3</p>
            <p>{selected.toString()}</p>
            <div style={styleContainer}>
                <CheckboxParent listOfKeywords={typeOfRoofing} subTitle='Type of Roofing' selectedList={selected} selectedListStateFunction={setSelected} />
                <CheckboxParent listOfKeywords={roofService} subTitle='Roof Service(s)' selectedList={selected} selectedListStateFunction={setSelected} />
                <CheckboxParent listOfKeywords={otherServices} subTitle='Other Service(s)' selectedList={selected} selectedListStateFunction={setSelected} />
            </div>
        </div>
    );
}

export default CheckBoxForm;