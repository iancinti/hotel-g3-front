"use client"
import * as React from 'react';
import Carrousel from '../components/carrousel';
import simple1 from '../../../public/images/gallery/simple01.jpg';
import simple2 from '../../../public/images/gallery/simple02.jpg';
import simple3 from '../../../public/images/gallery/simple03.jpg';
import simple4 from '../../../public/images/gallery/simple04.jpg';
import doble1 from '../../../public/images/gallery/doble1.jpg';
import doble2 from '../../../public/images/gallery/doble2.jpg';
import doble3 from '../../../public/images/gallery/doble3.jpg';
import doble4 from '../../../public/images/gallery/doble4.jpg';
import triple1 from '../../../public/images/gallery/triple1.jpg';
import triple2 from '../../../public/images/gallery/triple2.jpg';
import triple3 from '../../../public/images/gallery/triple3.jpg';
import { Typography } from '@mui/material';

function Gallery() {
    const simple = [
      { src: simple1 , alt: "Habitación", caption: "Habitación simple" },
      { src: simple2, alt: "Habitación", caption: "Habitación simple" },
      { src: simple3, alt: "Habitación", caption: "Habitación simple" },
      { src: simple4, alt: "Habitación", caption: "Habitación simple" },
    ];
    const doble = [
      { src: doble1 , alt: "Habitación", caption: "Habitación doble" },
      { src: doble2, alt: "Habitación", caption: "Habitación doble" },
      { src: doble3, alt: "Habitación", caption: "Habitación doble" },
      { src: doble4, alt: "Habitación", caption: "Habitación doble" },
    ];
    const triple = [
      { src: triple1 , alt: "Habitación", caption: "Habitación triple" },
      { src: triple2, alt: "Habitación", caption: "Habitación triple" },
      { src: triple3, alt: "Habitación", caption: "Habitación triple" },
    ];
    const h1style = {
      textAlign: 'center',
      fontSize: '2.5em',
      color: '#081928',
      fontWeight: '700',
      margin: '2em',
    }
    const h2style ={
      ...h1style,
      textAlign: 'left',
    }
    return(
        <div >
            <Typography style={h1style} >NUESTRAS HABITACIONES</Typography>            
            <h2 style={h2style}>SUITE SIMPLE</h2>
            <Carrousel initialImages={simple} />
            <h2 style={h2style}>SUITE DOBLE</h2>
            <Carrousel initialImages={doble} />
            <h2 style={h2style}>SUITE TRIPLE</h2>
            <Carrousel initialImages={triple} />
        </div>
    );
}; 
 
   

export default Gallery;
