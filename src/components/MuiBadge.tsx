import {Badge, Stack} from "@mui/material";
import MailIcon from '@mui/icons-material/MailOutlineOutlined';

export const MuiBadge = () => {

    return (
        <Stack spacing={2} direction={'row'}>
            <Badge badgeContent={7} color={'primary'}>
                <MailIcon/>
            </Badge>
            <Badge badgeContent={0} color={'primary'} showZero>
                <MailIcon/>
            </Badge>
            <Badge badgeContent={10} max={999} color={'primary'}>
                <MailIcon/>
            </Badge>
            <Badge variant={'dot'} color={'primary'} >
                <MailIcon/>
            </Badge>
        </Stack>
    );
}