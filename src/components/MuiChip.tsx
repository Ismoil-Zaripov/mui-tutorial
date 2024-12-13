import {Avatar, Chip, Stack} from "@mui/material";
import {Face} from "@mui/icons-material";
import {useState} from "react";

export const MuiChip = () => {

    const [chips, setChips] = useState(['Chip 1', 'Chip 2', 'Chip 3', 'Chip 4', 'Chip 5',])
    const handleDelete = (chipToDelete: string) => {
        setChips(chips => chips.filter(chip => chip !== chipToDelete));
    }

    return (
        <Stack direction={'row'} spacing={1}>
            <Chip
                label={'Chip'}
                color={'primary'}
                size={'small'}
                icon={<Face/>}
            />
            <Chip
                label={'Chip outlined'}
                color={'secondary'}
                size={'small'}
                variant={'outlined'}
                avatar={<Avatar>V</Avatar>}
            />
            <Chip
                label={'Click'}
                color={'success'}
                size={'small'}
                onClick={() => alert("Clicked")}
            />
            <Chip
                label={'Delete'}
                color={'error'}
                size={'small'}
                onClick={() => alert("Clicked")}
                onDelete={() => alert("Delete handler called")}
            />
            {
                chips.map((chip) => (
                    <Chip
                        label={chip}
                        color={'primary'}
                        size={'small'}
                        onDelete={() => handleDelete(chip)}
                    />
                ))
            }
        </Stack>
    );
}