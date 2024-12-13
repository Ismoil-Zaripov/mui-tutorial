import {Avatar, AvatarGroup, Stack} from "@mui/material";

export const MuiAvatar = () => {

    const API = 'https://randomuser.me/api/portraits';
    const imgUrl = () => `${API}/women/${Math.floor(Math.random() * 100)}.jpg`

    return (
        <Stack spacing={4}>
            <Stack direction={'row'} spacing={1}>
                <Avatar
                    sx={{
                        bgcolor: 'primary.light',
                        width: 50,
                        height: 50
                    }}
                    variant={'circular'}
                >RA</Avatar>
                <Avatar
                    sx={{
                        bgcolor: 'primary.light',
                        width: 50,
                        height: 50
                    }}
                    variant={'square'}
                >BW</Avatar>
                <Avatar
                    sx={{
                        bgcolor: 'success.light',
                        width: 50,
                        height: 50
                    }}
                    variant={'rounded'}
                >IZ</Avatar>
            </Stack>
            <Stack direction={'row'} spacing={1}>
                <AvatarGroup max={3}>
                    <Avatar
                        src={imgUrl()}
                        alt={'John Doe'}
                    />
                    <Avatar
                        src={imgUrl()}
                        alt={'Alisa'}
                    />
                    <Avatar
                        src={imgUrl()}
                        alt={'Alisa'}
                    />
                    <Avatar
                        src={imgUrl()}
                        alt={'Alisa'}
                    />
                    <Avatar
                        src={imgUrl()}
                        alt={'Alisa'}
                    />
                    <Avatar
                        src={imgUrl()}
                        alt={'Alisa'}
                    />
                </AvatarGroup>
            </Stack>
        </Stack>
    );
}