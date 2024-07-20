'use client';
import * as React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const theme = createTheme({
    palette: {
      text: {
        primary: '#081928',
      },
    },
  });


const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',    
    backgroundColor: "#E6F1FC"
    }

)); 

const Footer = () => {
    return (
        
        <div >
            <ThemeProvider theme={theme} >
                <CssBaseline />
                <Box sx={{ flexGrow: 1 }}>
                    <Grid color="textPrimary" fontWeight={'700'} fontFamily={'Raleway'} style={{ fontSize: '20px' }} alignItems={"center"} container spacing={2}>
                        <Grid item xs={12} md={3}>
                            <Item elevation={0}>hotel@gmail.com</Item>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Item elevation={0}>(+54) 11-3848-2222</Item>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Item elevation={0}>San Martín 4343, Palermo, CABA.</Item>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Item elevation={0}>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={0} >
                                        <Grid  item xs={12} md={3}>
                                            <Item elevation={0}><WhatsAppIcon></WhatsAppIcon></Item>
                                        </Grid>
                                        <Grid  item xs={12} md={3}>
                                            <Item elevation={0}><FacebookIcon></FacebookIcon></Item>
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <Item elevation={0}><InstagramIcon></InstagramIcon></Item>
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <Item elevation={0}><TwitterIcon></TwitterIcon></Item>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
                <Box>
                    <Typography color="textPrimary" fontWeight={'700'} fontFamily={'Raleway'} style={{ fontSize: '20px'}} padding={2} sx={{display: 'flex' , flexDirection: 'row' ,justifyContent: 'center' , alignItems: 'center'}} variant="body1" gutterBottom>
                        <CopyrightIcon></CopyrightIcon>
                        2024 Todos los derechos reservados.
                        
                    </Typography>
                </Box>
            </ThemeProvider>
        </div>
    );

};

export default Footer;