import React, {useState} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const SubCheckbox = ({kw, selected, setSelected}) => 
{
    const [checked, setChecked] = useState(false);
    const handleChange = (event) => 
    {
        setChecked(event.target.checked);
        setSelected(selected.concat(event.target.id));
    }
    return(
        <div>
            <FormControlLabel 
            control= {
                <Checkbox 
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'indeterminate checkbox' }} 
                    id={kw}/>
            }
            label={kw}/>
        </div>
    )
}

export default SubCheckbox;