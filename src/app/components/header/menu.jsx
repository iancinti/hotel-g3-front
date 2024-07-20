'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import DrawerComponent from './drawer';
import LogoPerfil from './logo-perfil';
import ActiveLink from './activeLink';

const menus = [{
        path: '/',
        name: 'HOME'
    },{
        path: '/galeria',
        name: 'GALERIA'
    },{
        path: '/atracciones',
        name: 'ATRACCIONES'
    },{
        path: '/reserva',
        name: 'RESERVAS'
    },{
        path: '/servicio',
        name: 'SERVICIOS'
    },{
        path: '/contacto',
        name: 'CONTACTO'
}];

export default function MenuComponent() {
    const [open, setOpenDrawer] = React.useState(false);

    const handleOpenNavMenu = () => {
        setOpenDrawer(true);
    };
    
    const handleCloseNavMenu = () => {
        setOpenDrawer(false);
    };

    return (
        <AppBar position="static" color='transparent' sx={{
            boxShadow: 'none',
        }}>
            <LogoPerfil></LogoPerfil>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <DrawerComponent
                            openDrawer={open}
                            handleCloseNavMenu={handleCloseNavMenu}
                            menus={menus}
                        />
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <img src="/images/logo.png" alt=""
                            style={{
                                width: '85px',
                                height: '85px',
                                borderRadius: '7px'
                            }} />
                    </Typography>
                    <Box sx={{ 
                        flexGrow: 1, 
                        display: { xs: 'none', md: 'flex' },
                        justifyContent: 'space-between',
                        paddingTop: '80px',
                    }}>
                        {menus.map(({ path, name }) => (
                            <ActiveLink path={path} key={path}>
                                { name }
                            </ActiveLink>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}