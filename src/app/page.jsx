'use client';
import * as React from 'react';
import './globals.css';
import Header from "./components/header/header";
import Carrousel from './components/carrousel';
import Footer from './components/footer';
import { Typography } from '@mui/material';
import Buscador from './components/reserva/buscador/buscador';
import { getAllGallery } from '@/service/gallery';
import AlertBoton from './components/alertBoton';


function Home() {

  const [home, setHome] = React.useState([]);
  const [promo, setPromo] = React.useState([]);
  const [nos, setNos] = React.useState([]);

  React.useEffect(() => {

    const fetchItems = async () => {
      try {
        const data = await getAllGallery();
        setHome(data.filter((d) => d.idAttraction == 2));
        setPromo(data.filter((d) => d.idAttraction == 5));
        setNos(data.filter((d) => d.idAttraction == 4));
      } catch (error) {

      }
    }

    fetchItems();

  }, []);

  const styleSection =
    { 
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
    width: '40em',
    height: 'fit-content',
    marginBottom: '4em',
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
      <Header bannerImg='banners/banner-home.jpg'></Header>
    
      <section className='homeSection' style={styleSection}>
        <div style={styleDiv}>
          <h1 style={h1style}>EL HOTEL</h1>
          <Typography style={textStyle} > Situado en las afueras de la ciudad, Hotel G3 es la excusa perfecta para el relax, confort y disfrutar. Una experiencia gratificante, que hará que quiera volver. Profesionalismo, seguridad y confort, son nuestras premisas. </Typography>
        </div>
        <div className='divCarrusel' style={styleDiv2}>
        <Carrousel  initialImages={home} showRemoveButton={false} />
        </div>
      </section>

      <section className='homeSection2' style={styleSection}>
        <div  className='divCarrusel' style={styleDiv2}>
          <Carrousel initialImages={promo} showRemoveButton={false}/>
        </div>
        <div style={styleDiv}>
          <h1 style={h1style}>PROMOCIONES</h1>
          <Typography style={textStyle}>No te pierdas las promociones exclusivas que tenemos para estas vacaciones de invierno. Además, contamos habitualmente, con descuentos exclusivos para clientes y combos imperdibles.</Typography>
        </div>
        
      </section>

      <section className='homeSection' style={styleSection}>
        <div style={styleDiv}>
          <h1 style={h1style}>NOSOTROS</h1>
          <Typography style={textStyle}>Hotel G3, fue fundado en 1956, por un grupo de socios. Desde entonces, abre sus puertas al público ofreciendo excelencia en todos sus servicios.
          Nuestro restaurante cuenta con la mejor calificación por expertos.</Typography>
        </div>
        <div className='divCarrusel'  style={styleDiv2}>
        <Carrousel initialImages={nos} showRemoveButton={false}/>
        </div>
      </section>

 <AlertBoton text="Su pago fue realizado" name="PAGAR"></AlertBoton>
      
      <Buscador></Buscador>
      <Footer></Footer>
    </div>
  );
};

export default Home;