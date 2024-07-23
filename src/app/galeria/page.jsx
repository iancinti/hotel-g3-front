"use client";
import './galeria.css';
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
    const styleDiv2={
      width: '40em',
      height: 'auto',
      margin: '4em auto',
      
    };
    
    return(
        <div >
          <Typography style={h1style} >NUESTRAS HABITACIONES</Typography>
          <section style={styleDiv2}>
               
            <div className="galleryCarrusel" >        
              <Carrousel  initialImages={simple} />
              <Carrousel  initialImages={doble} />
              <Carrousel initialImages={triple} />
            </div> 
          </section>  
          <Buscador></Buscador>
        </div>
    );
}; 
 
   

export default Gallery;
