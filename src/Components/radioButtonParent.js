import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const RadioButtonParent = ({choice, setChoice}) => 
{

    const styleDiv = {
        justifyContent:"center",
        textAlign:"left",
    }

    const handleChange = (event) => 
    {
        setChoice(event.target.value);
    }

    return (
        <div style={styleDiv}>
            <h4>Manufacturer</h4>
            <RadioGroup aria-label="manufacturer" name="manufacturer" value={choice} onChange={handleChange}>
                <FormControlLabel value="Owens Corning" control={<Radio/>} label="Owens Corning"></FormControlLabel>
                <FormControlLabel value="General Aniline & Film" control={<Radio/>} label="General Aniline & Film"></FormControlLabel>
            </RadioGroup>
        </div>
    )
}

export default RadioButtonParent;