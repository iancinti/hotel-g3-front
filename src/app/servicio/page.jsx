'use client';
import * as React from 'react';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { css, Global } from '@emotion/react';
import serv1 from '../../../public/images/servicios/service1.jpg';
import serv2 from '../../../public/images/servicios/service2.jpg';
import serv3 from '../../../public/images/servicios/service3.jpg';
import serv4 from '../../../public/images/servicios/service4.jpg';
import serv5 from '../../../public/images/servicios/service5.jpg';


const images = [
        {
          label: 'TV LED en cada habitación, con conexión a internet.',
          imgPath: serv1 ,
        },
        {
          label: 'Conexión Wi-fi en cada habitación y en salas comunes.',
          imgPath: serv2 ,
        },
        {
          label: 'Estacionamiento cerrado sin cargo, con servicio de valet-parking.',
          imgPath: serv3,
        },
        {
          label: 'Minibar privado, con reposición diaria y cargo a la cuenta al retirarse.',
          imgPath: serv4 ,
        },
        {
            label: 'Aire acondicionado frio/calor, en todas las habitaciones y en las areas comunes.',
            imgPath: serv5 ,
        },
    ];
const customStyles = css`
   
    .slick-slider .slick-prev:before, .slick-slider .slick-next:before {
    color: #081928; 
  }
  `;

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
    }
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
                                    component={Image}
                                    sx={{
                                    height: 'auto',
                                    display: 'block',
                                    maxWidth: 600,
                                    overflow: 'hidden',
                                    width: '100%',
                                    }}
                                    src={step.imgPath}
                                    alt={step.label}
                                    layout="responsive"
                                    width={600}
                                />
                           
                        </div>
                    ))}
                </Slider>
                
            </Box>
        </div>
    );
};
export default Service;







    
