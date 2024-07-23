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

  React.useEffect(()=>{

    const fetchItems = async () =>{
      try {
        const data = await getAllGallery();
        console.log(data)
      } catch (error) {
        
      }
    }

    fetchItems();

  }, []);

    const simple = [
      { src: 'https://utennwehrdbsrygnbwyk.supabase.co/storage/v1/object/public/images/gallery/simple01.jpg' , alt: "Habitación", caption: "Habitación simple" },
      { src: 'https://utennwehrdbsrygnbwyk.supabase.co/storage/v1/object/public/images/gallery/simple02.jpg', alt: "Habitación", caption: "Habitación simple" },
      { src: 'https://utennwehrdbsrygnbwyk.supabase.co/storage/v1/object/public/images/gallery/simple03.jpg', alt: "Habitación", caption: "Habitación simple" },
      { src: 'https://utennwehrdbsrygnbwyk.supabase.co/storage/v1/object/public/images/gallery/simple04.jpg', alt: "Habitación", caption: "Habitación simple" },
    ];
    const doble = [
      { src: 'https://utennwehrdbsrygnbwyk.supabase.co/storage/v1/object/public/images/gallery/doble1.jpg' , alt: "Habitación", caption: "Habitación doble" },
      { src: 'https://utennwehrdbsrygnbwyk.supabase.co/storage/v1/object/public/images/gallery/doble2.jpg', alt: "Habitación" , caption: "Habitación doble" },
      { src: 'https://utennwehrdbsrygnbwyk.supabase.co/storage/v1/object/public/images/gallery/doble3.jpg', alt: "Habitación", caption: "Habitación doble" },
      { src: 'https://utennwehrdbsrygnbwyk.supabase.co/storage/v1/object/public/images/gallery/doble4.jpg', alt: "Habitación", caption: "Habitación doble" },
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
