import {Box, MenuItem, TextField} from "@mui/material";
import React, {useState} from "react";

export const MuiSelect = () => {

    const [countries, setCountries] = useState<string[]>([])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setCountries(typeof value === 'string' ? value.split(',') : value)
    }

    return (
        <Box width={'250px'}>
            <TextField
                label={'Select country'}
                value={countries}
                onChange={handleChange}
                size={'small'}
                color={'secondary'}
                helperText={
                    countries.length === 0
                        ? 'Please select your country'
                        : ''
                }
                error={countries.length === 0}
                fullWidth
                select
                SelectProps={{
                    multiple: true,
                }}
            >
                <MenuItem value={'IN'}>India</MenuItem>
                <MenuItem value={'US'}>USA</MenuItem>
                <MenuItem value={'UK'}>United Kingdom</MenuItem>
            </TextField>
        </Box>
    );
}