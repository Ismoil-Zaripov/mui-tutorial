import {Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel} from "@mui/material";
import React, {useState} from "react";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export const MuiCheckbox = () => {

    const [skills, setSkills] = useState<string[]>([])
    const [accept, setAccept] = useState(false)

    console.log({skills})
    

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAccept(event.target.checked)
    }
    const handleSkillsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(event.target.value)
        if (index === -1) {
            setSkills([...skills, event.target.value])
        } else {
            setSkills(skills.filter((skill) => skill !== event.target.value))
        }
    }

    return (
        <Box>
            <Box>
                <FormControlLabel
                    label={'I accept terms and conditions'}
                    control={<Checkbox checked={accept} onChange={handleChange}/>}
                />
            </Box>
            <Box>
                <Checkbox
                    icon={<ThumbUpOutlinedIcon/>}
                    checkedIcon={<ThumbUpIcon/>}
                    checked={accept}
                    onChange={handleChange}
                />
            </Box>
            <Box>
                <FormControl>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            label={'JavaScript'}
                            value={'js'}
                            control={<Checkbox checked={skills.includes('js')} onChange={handleSkillsChange}/>}
                        />
                        <FormControlLabel
                            label={'Java'}
                            value={'java'}
                            control={<Checkbox checked={skills.includes('java')} onChange={handleSkillsChange}/>}
                        />
                        <FormControlLabel
                            label={'SQL'}
                            value={'sql'}
                            control={<Checkbox checked={skills.includes('sql')} onChange={handleSkillsChange}/>}
                        />
                    </FormGroup>
                </FormControl>
            </Box>
        </Box>
    );
}