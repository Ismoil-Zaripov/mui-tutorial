import {Box, FormControlLabel, Stack, Switch} from "@mui/material";
import React, {useState} from "react";

export const MuiSwitch = () => {

    const [checked, setChecked] = useState(false)
    console.log({ checked })
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=> {
        setChecked(event.target.checked)
    }
    return (
        <Stack spacing={4}>
            <Box>
                <FormControlLabel control={ <Switch checked={checked} onChange={handleChange}/> } label={'Dark mode'} />
            </Box>
        </Stack>
    );
}