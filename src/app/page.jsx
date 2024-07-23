'use client';
import * as React from 'react';
import './globals.css';
import Header from "./components/header/header";
import Carrousel from './components/carrousel';
import Footer from './components/footer';
import home1 from '../../public/images/homeimg/home1.jpg';
import home3 from '../../public/images/homeimg/home3.jpg';
import home2 from '../../public/images/homeimg/home2.jpg';
import home4 from '../../public/images/homeimg/home4.jpg';
import promo1 from '../../public/images/homeimg/promo1.jpg';
import promo2 from '../../public/images/homeimg/promo2.jpg';
import promo3 from '../../public/images/homeimg/promo3.jpg';
import promo4 from '../../public/images/homeimg/promo4.jpg';
import nos1 from '../../public/images/homeimg/nos1.jpg';
import nos2 from '../../public/images/homeimg/nos2.jpg';
import nos3 from '../../public/images/homeimg/nos3.jpg';
import nos4 from '../../public/images/homeimg/nos4.jpg';
import { Typography } from '@mui/material';
import { fontFamily } from '@mui/system';
import Buscador from './components/reserva/buscador/buscador';


function Home() {
  const home = [
    { src: home1 , alt: "Fotos del hotel", caption: "Nuestras instalaciones" },
    { src: home2, alt: "Fotos del hotel", caption: "Nuestras instalaciones" },
    { src: home3, alt: "Fotos del hotel", caption: "Nuestras instalaciones" },
    { src: home4, alt: "Fotos del hotel", caption: "Nuestras instalaciones" },
  ];
  const promo = [
    { src: promo1 , alt: "Fotos del hotel", caption: "Promociones" },
    { src: promo2, alt: "Fotos del hotel", caption: "Promociones" },
    { src: promo3, alt: "Fotos del hotel", caption: "Promociones" },
    { src: promo4, alt: "Fotos del hotel", caption: "Promociones" },
  ];
  const nos = [
    { src: nos1 , alt: "Fotos del hotel", caption: "Nosotros" },
    { src: nos2, alt: "Fotos del hotel", caption: "Nosotros" },
    { src: nos3, alt: "Fotos del hotel", caption: "Nosotros" },
    { src: nos4, alt: "Fotos del hotel", caption: "Nosotros" },
  ];
  const styleSection ={
    display: 'flex',
    flexDirection: 'row',
    margin: '0 4em',
    justifyContent: 'space-around',
  };
  const styleDiv ={
    display: 'flex',
    flexDirection: 'column',
    margin: '2em',    
    width: '30em',
  };
  const styleDiv2={
    width: '38em',
    marginBottom: '4em'
  };
    
  const h1style = {
    textAlign: 'left',
    fontSize: '2.5em',
    color: '#081928',
    fontWeight: '700',
    marginBottom: '2em',
  };
  const textStyle ={
    textAlign: 'left',
    fontSize: '1.5em',
    color: '#081928',
    fontWeight: '700',
  };
  return (
    <div>
      <Header bannerImg='/images/banners/banner-home.jpg'></Header>
    
      <section style={styleSection}>
        <div style={styleDiv}>
          <h1 style={h1style}>EL HOTEL</h1>
          <Typography style={textStyle}> Situado en las afueras de la ciudad, Hotel G3 es la excusa perfecta para el relax, confort y disfrutar. Una experiencia gratificante, que hará que quiera volver. Profesionalismo, seguridad y confort, son nuestras premisas. </Typography>
        </div>
        <div style={styleDiv2}>
        <Carrousel  initialImages={home} showRemoveButton={false} />
        </div>
      </section>

      <section style={styleSection}>
        <div style={styleDiv2}>
          <Carrousel initialImages={promo} showRemoveButton={false}/>
        </div>
        <div style={styleDiv}>
          <h1 style={h1style}>PROMOCIONES</h1>
          <Typography style={textStyle}>No te pierdas las promociones exclusivas que tenemos para estas vacaciones de invierno. Además, contamos habitualmente, con descuentos exclusivos para clientes y combos imperdibles.</Typography>
        </div>
        
      </section>

      <section style={styleSection}>
        <div style={styleDiv}>
          <h1 style={h1style}>NOSOTROS</h1>
          <Typography style={textStyle}>Hotel G3, fue fundado en 1956, por un grupo de socios. Desde entonces, abre sus puertas al público ofreciendo excelencia en todos sus servicios.
          Nuestro restaurante cuenta con la mejor calificación por expertos.</Typography>
        </div>
        <div style={styleDiv2}>
        <Carrousel initialImages={nos} showRemoveButton={false}/>
        </div>
      </section>
      <Buscador></Buscador>
      <Footer></Footer>
    </div>
  );
};

export default Home;