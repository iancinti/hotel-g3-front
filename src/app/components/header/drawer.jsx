'use client';
import * as React from 'react';
import { Drawer, Box, List, ListItem, ListItemButton } from "@mui/material";
import ActiveLink from './activeLink';

export default function DrawerComponent({ openDrawer = false, handleCloseNavMenu, menus}) {

    const toggleDrawer = (newOpen) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        handleCloseNavMenu(newOpen);
    };

    const DrawerList = () => (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <List>
                {menus.map(({ path, name }) => (
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ActiveLink path={path} key={path}>
                                {name}
                            </ActiveLink>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <Drawer open={openDrawer} onClose={toggleDrawer(false)}>
                <DrawerList />
            </Drawer>
        </div>
    );
}