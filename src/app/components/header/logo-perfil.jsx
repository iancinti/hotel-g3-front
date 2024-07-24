'use client'
import * as React from 'react';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { Container } from '@mui/material';
import Link from 'next/link';

const settings = [{
    text: 'Mi Perfil',
    path: '/mi-perfil'
},{
    text: 'Cerrar Sesion',
    path: '/logout'
}
];

function LogoPerfil() {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [ srcAvatar, setSrcAvatar ] = React.useState('/images/default-user.jpg');

    React.useEffect(()=>{
        // peticion para traer el avatar del usuario
        // const fetchAvatar = async () => {
        //     try {
        //         const data = await getAvatar();
        //         setSrcAvatar(data);
        //     } catch (error) {
        //         console.error('Error al obtener el avatar:', error);
        //     }
        // };

        // fetchAvatar();
    },[]);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Container maxWidth="xl" sx={{
            display: 'flex', justifyContent: 'space-between', paddingTop: '1rem',
            alignItems: 'center'
        }}>
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
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
                    }}/>
            </Typography>
            <Box sx={{
                    flexGrow: 0,
                    display: { md: 'flex' }, 
                    // p: 0,
                    position: { xs: 'absolute', md: 'relative' },
                    right: { xs: '20px' },
                    top: { xs: '20px' },
                    zIndex: { xs: '100' }
                }}>
                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src={srcAvatar} />
                    </IconButton>
                </Tooltip>
                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                    {settings.map(({ path, text }) => (
                        <MenuItem key={path}
                            onClick={handleCloseUserMenu}
                        >
                            <Link href={path} className='flex-1'>
                                <Typography>
                                    { text }
                                </Typography>
                            </Link>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
        </Container>
    );
}

export default LogoPerfil;