import React, {useState} from 'react';
import SubCheckbox from './subCheckbox';

const keywords = ['Residential Roofing', 'Commercial Roofing', 'Shingle Roofing', 'Tile Roofing', 'Metal Roofing', 'Flat Roofing', 'Slate Roofing', 'Roof Replacement',
        'Roof Repair', 'Roof Cleaning', 'Roof Maintenance', 'Roof Financing', 'Roof Inspection', 'Solar Roof', 'Attic Insulation', 'Roof Maxx', 'Gutter Repair', 'Gutter Installation',
        'Seamless Gutters', 'Skylight Installation', 'Storm Damage Repair', 'Emergency Roofing','Roof Damage Repair', 'Leaky Roof'];

const CheckBoxForm = () => 
{
    const [selected, setSelected] = useState([]);
    return (
        <div>
            <h2>Keywords: </h2>
            <p>For best performance try to only target 3</p>
            <p>{selected.toString()}</p>
            {
                keywords.map((kw => <SubCheckbox kw={kw} selected={selected} setSelected={setSelected}/>))
            }
        </div>
    );
}

export default CheckBoxForm;