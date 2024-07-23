'use client';
import * as React from 'react';
import { Avatar, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { css, Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const images = [
        {
          label: 'TV LED en cada habitación, con conexión a internet.',
            imgPath: 'servicios/service1.jpg',
        },
        {
          label: 'Conexión Wi-fi en cada habitación y en salas comunes.',
            imgPath: 'servicios/service2.jpg' ,
        },
        {
          label: 'Estacionamiento cerrado sin cargo, con servicio de valet-parking.',
            imgPath: 'servicios/service3.jpg',
        },
        {
          label: 'Minibar privado, con reposición diaria y cargo a la cuenta al retirarse.',
            imgPath: 'servicios/service4.jpg' ,
        },
        {
            label: 'Aire acondicionado frio/calor, en todas las habitaciones y en las areas comunes.',
            imgPath: 'servicios/service5.jpg' ,
        },
    ];
const customStyles = css`
   
    .slick-slider .slick-prev:before, .slick-slider .slick-next:before {
    color: #081928; 
  }
  `;
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
    backgroundColor: "#E6F1FC",
    }


)); 

function Service(){
    
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;
      
  
    const settings = {
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (current) => setActiveStep(current),
      };  
    
    const h1style = {
        textAlign: 'center',
        fontSize: '2.5em',
        color: '#081928',
        fontWeight: '700',
        margin: '2em',
    };
    const labelStyle = {
        ...h1style,
        fontSize: '1.5em',
        fontWeigth: '400',
        margin: '0',
    };
    const boxStyle = {
        margin: '0 auto',
    };
  
    return (
        <div>
            <Typography style={h1style} >NUESTROS SERVICIOS</Typography>
        
            <Box style={boxStyle} sx={{ maxWidth: 600, flexGrow: 1 }}>
            <Global styles={customStyles} />
                <Paper
                    square
                    elevation={0}
                    sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 100,
                    pl: 2,
                    bgcolor: '#E6F1FC',
                    }}
                >
                    <Typography style={labelStyle}>{images[activeStep].label}</Typography>
                </Paper>
                <Slider { ...settings }>
                    {images.map((step, index) => (
                        <div key={step.label}>
                           
                                <Box
                                    sx={{
                                    height: 'auto',
                                    display: 'block',
                                    maxWidth: 600,
                                    overflow: 'hidden',
                                    width: '100%',
                                    }}
                                    src={step.imgPath}
                                    alt={step.label}
                                >
                                <Image src={step.imgPath} 
                                    width={600} alt='hola' height={600} />
                                </Box>
                           
                        </div>
                    ))}
                </Slider>
                
            </Box>
            <Typography style={h1style} >GENERAL</Typography>
            <ThemeProvider theme={theme} >
                <CssBaseline />
                <Box  sx={{ flexGrow: 1 }}>
                    <Grid color="textPrimary" fontWeight={'700'} fontFamily={'Raleway'} style={{ fontSize: '1.5em' }} alignItems={"center"} justifyContent={"space-evenly"} container spacing={3} >
                        <Grid item xs={12} md={12} lg={5}>
                            <Item elevation={0}>Check in 14.00hs</Item>
                        </Grid>
                        <Grid item xs={12} md={12} lg={5}>
                            <Item elevation={0}>Check out 10.00hs</Item>
                        </Grid>
                        <Grid item xs={12} md={12} lg={5}>
                            <Item elevation={0}>Desayuno opcional con cargo de 7.30 a 10.30 hs</Item>
                        </Grid>
                        <Grid item xs={12} md={12} lg={5}>
                            <Item elevation={0}>Servicio de conserjería</Item>
                        </Grid>
                        <Grid item xs={12} md={12} lg={5}>
                            <Item elevation={0}>Alquiler de autos</Item>
                        </Grid>
                        <Grid item xs={12} md={12} lg={5}>
                            <Item elevation={0}>Cambio de moneda</Item>
                        </Grid>
                        <Grid item xs={12} md={12} lg={5}>
                            <Item elevation={0}>Información turística</Item>
                        </Grid>
                        <Grid item xs={12} md={12} lg={5}>
                            <Item elevation={0}>No se admiten mascotas</Item>
                        </Grid>
                        <Grid item xs={12} md={12} lg={5}>
                            <Item elevation={0}>Habitaciones aptas para alérgicos</Item>
                        </Grid>
                        <Grid item xs={12} md={12} lg={5}>
                            <Item elevation={0}>Calefacción</Item>
                        </Grid>
                        <Grid item xs={12} md={12} lg={5}>
                            <Item elevation={0}>Caja fuerte</Item>
                        </Grid>
                        <Grid item xs={12} md={12} lg={5}>
                            <Item elevation={0}>Ascensor</Item>
                        </Grid>
                        
                    </Grid>
                </Box>
            </ThemeProvider>
        </div>
    );
};
export default Service;







    
