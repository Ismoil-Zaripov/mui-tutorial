import {Autocomplete, Stack, TextField} from "@mui/material";
import {useState} from "react";

export const MuiAutoComplete = () => {

    type Skill = {
        id: number,
        label: string
    }

    const skills = ['HTML', 'CSS', 'JAVASCRIPT', 'TYPESCRIPT', 'REACT', 'JAVA', 'SPRING BOOT', 'SQL']
    const skillOptions = skills.map((skill, index) => ({
        id: index,
        label: skill
    }))

    const [value, setValue] = useState<string | null>(null)
    const [skill, setSkill] = useState<Skill | null>(null)

    console.log({skill})
    return (
        <>
            <Stack spacing={2} width={'250px'}>
                <Autocomplete
                    options={skills}
                    renderInput={(params) => <TextField {...params} label={'Skills'}/>}
                    value={value}
                    onChange={(_event: any, newValue: string | null) => setValue(newValue)}
                />
                <Autocomplete
                    options={skillOptions}
                    renderInput={(params) => <TextField {...params} label={'Skills'}/>}
                    value={skill}
                    onChange={(_event: any, newValue: Skill | null) => setSkill(newValue)}
                />
            </Stack>
        </>
    );
}