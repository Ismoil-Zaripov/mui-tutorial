import {Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import React, {useState} from "react";

export const MuiRadioButton = () => {

    const [value, setValue] = useState('')
    console.log({ value })
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return (
        <Box>
            <FormControl>
                <FormLabel id={'group-label'}>
                    Years of experience
                </FormLabel>
                <RadioGroup
                    name={'group'}
                    aria-labelledby={'group-label'}
                    value={value}
                    onChange={handleChange}
                    row
                >
                    <FormControlLabel control={<Radio size={'medium'} color={'error'} />} label={'0-2'} value={'0-2'} />
                    <FormControlLabel control={<Radio color={'warning'}/>} label={'3-5'} value={'3-5'} />
                    <FormControlLabel control={<Radio color={'success'}/>} label={'6-10'} value={'6-10'} />
                </RadioGroup>
            </FormControl>
        </Box>
    );
}