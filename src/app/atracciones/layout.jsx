
import * as React from 'react';
import Footer from "../components/footer";
import Header from "../components/header/header";
import CardImage from '../components/card-image/card-image.jsx';

export default function AttractionsLayout({ children }) {
    return (
        <>
                <Header backgroundColor="var(--fondo)"></Header>
                {children}
                <div>
                    {<div className="flex justify-center gap-4 p-4 flex-wrap">
                        <CardImage
                            bgColor='white'
                            title='Rio azul'
                            bgColorMain='gray'
                            srcImage='images/atracciones/lugar1.png'
                            direction='Rio Azul, CABA.'
                            distancia='A 1.2Km de nuestro hotel'
                        ></CardImage>
                        <CardImage
                            bgColor='white'
                            title='Puente'
                            bgColorMain='gray'
                            srcImage='images/atracciones/lugar2.png'
                            direction='Ciudad Dorada, CABA.'
                            distancia='A 7.3Km de nuestro hotel'
                        ></CardImage>
                        <CardImage
                            bgColor='white'
                            title='Estacion de trenes'
                            bgColorMain='gray'
                            srcImage='images/atracciones/lugar3.png'
                            direction='Pueblo Antiguo, CABA.'
                            distancia='A 1.3Km de nuestro hotel'
                        ></CardImage>
                        <CardImage
                            bgColor='white'
                            title='Pasillo turistico'
                            bgColorMain='gray'
                            srcImage='images/atracciones/lugar4.png'
                            direction='Pequeño Ital, CABA.'
                            distancia='A 1.3Km de nuestro hotel'
                        ></CardImage>
                        <CardImage
                            bgColor='white'
                            title='Botes'
                            bgColorMain='gray'
                            srcImage='images/atracciones/lugar5.png'
                            direction='Canales De Agua, CABA.'
                            distancia='A 1.7Km de nuestro hotel'
                        ></CardImage>
                        <CardImage
                            bgColor='white'
                            title='Capilla'
                            bgColorMain='gray'
                            srcImage='images/atracciones/lugar6.png'
                            direction='Casas Blancas, CABA.'
                            distancia='A 3Km de nuestro hotel'
                        ></CardImage>
                        <CardImage
                            bgColor='white'
                            title='Plaza'
                            bgColorMain='gray'
                            srcImage='images/atracciones/lugar7.png'
                            direction='Villita, CABA.'
                            distancia='A 3.2Km de nuestro hotel'
                        ></CardImage>
                        <CardImage
                            bgColor='white'
                            title='Jarnin'
                            bgColorMain='gray'
                            srcImage='images/atracciones/lugar8.png'
                            direction='Granjas Arroz, CABA.'
                            distancia='A 20.3Km de nuestro hotel'
                        ></CardImage>
                        <CardImage
                            bgColor='white'
                            title='Fabelas'
                            bgColorMain='gray'
                            srcImage='images/atracciones/lugar9.png'
                            direction='Ciudad China, CABA.'
                            distancia='A .8Km de nuestro hotel'
                        ></CardImage>
                    </div>}
                </div>
                <Footer></Footer>
         
        </>
    );
}
