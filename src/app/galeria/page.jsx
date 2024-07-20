"use client"
import * as React from 'react';
import Carrousel from '../components/carrousel';
import simple1 from '../../../public/images/gallery/simple01.jpg';
import simple2 from '../../../public/images/gallery/simple02.jpg';
import simple3 from '../../../public/images/gallery/simple03.jpg';
import simple4 from '../../../public/images/gallery/simple04.jpg';
import { Typography } from '@mui/material';


function Gallery() {
    const simple = [
        { src: simple1 , alt: "Habitación", legend: "Habitación simple" },
        { src: simple2, alt: "Habitación", legend: "Habitación simple" },
        { src: simple3, alt: "Habitación", legend: "Habitación simple" },
        { src: simple4, alt: "Habitación", legend: "Habitación simple" },
      ];
      const h1style = {
        textAlign: 'center',
        fontSize: '2.5em',
        color: '#081928',
        fontWeight: '700',
        margin: '3em',
      }
      const h1style2 ={
        ...h1style,
        textAlign: 'left',
      }
    return(
        <div >
            <Typography style={h1style} >NUESTRAS HABITACIONES</Typography>            
            <h1 style={h1style2}>SUITE SIMPLE</h1>
            <Carrousel images={simple} />
            
        </div>
    );
}; 
 
   

export default Gallery;