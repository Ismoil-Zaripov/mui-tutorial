import {AppBar, Button, IconButton, Menu, MenuItem, Stack, Toolbar, Typography} from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React, {useState} from "react";

export const MuiNavbar = () => {

    const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorElement);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>)=> setAnchorElement(event.currentTarget);
    const handleClose = () => setAnchorElement(null);

    return (
        <AppBar position={'static'}>
            <Toolbar>
                <IconButton size={'large'} edge={'start'} color={'inherit'} aria-label={'logo'}>
                    <CatchingPokemonIcon/>
                </IconButton>
                <Typography variant={'h6'} align={'left'} component={'div'} sx={{flexGrow: 1}}>
                    App
                </Typography>
                <Stack direction={'row'} spacing={2}>
                    <Button color={'inherit'}>Features</Button>
                    <Button color={'inherit'}>Prices</Button>
                    <Button
                        color={'inherit'}
                        id={'resources_button'}
                        onClick={handleClick}
                        aria-controls={open ? 'resource_menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup={'true'}
                        endIcon={<KeyboardArrowDownIcon/>}
                    >Resources</Button>
                    <Button color={'inherit'}>Login</Button>
                </Stack>
                <Menu
                    id={'resource_menu'}
                    anchorEl={anchorElement}
                    open={open}
                    MenuListProps={{
                        'aria-labelledby': 'resources_button'
                    }}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Blog</MenuItem>
                    <MenuItem onClick={handleClose}>Podcast</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
}