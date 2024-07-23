"use client"
import * as React from 'react';
import Carrousel from '../components/carrousel';
import triple1 from '../../../public/images/gallery/triple1.jpg';
import triple2 from '../../../public/images/gallery/triple2.jpg';
import triple3 from '../../../public/images/gallery/triple3.jpg';
import { Typography } from '@mui/material';
import Buscador from '../components/reserva/buscador/buscador';
import { getAllGallery } from '@/service/gallery';

function Gallery() {

  const [simple, setSimple ] = React.useState([]);
  const [doble, setDoble ] = React.useState([]);
  const [triple, setTriple ] = React.useState([]);

  React.useEffect(()=>{

    const fetchItems = async () =>{
      try {
        const data = await getAllGallery();
        setSimple(data.filter((d) => d.idRoom == 2 ));
        setDoble(data.filter((d) => d.idRoom == 1 ));
        setTriple(data.filter((d) => d.idRoom == 3 ));
      } catch (error) {
        
      }
    }

    fetchItems();

  }, []);

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
            <Carrousel alt='Habitacion' initialImages={simple} />
            <h2 style={h2style}>SUITE DOBLE</h2>
            <Carrousel alt='Habitacion' initialImages={doble} />
            <h2 style={h2style}>SUITE TRIPLE</h2>
            <Carrousel alt='Habitacion' initialImages={triple} />
            <Buscador></Buscador>
        </div>
    );
}; 
 
   

export default Gallery;
