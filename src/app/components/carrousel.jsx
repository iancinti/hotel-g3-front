"use client"
import * as React from 'react';
import Image from 'next/image';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 


function Carrousel({images}) {
    const carrouselStyle ={
        width: '25%',
        height: '31.25em',
        margin: '3em auto',
        
        
        
    };
    const imageStyle = {
        objectFit: 'cover',
        width: '31.25em',
        height: '31.25em',
      };
    return(
        <div style={carrouselStyle}>
            <Carousel showThumbs={false}>
                {images.map((image, index) => (
                    <div key={index}>
                    <Image
                        src={image.src}
                        alt={image.alt}                   
                        quality={75}
                        style={imageStyle}
                    />
                    <p className="legend">{image.legend}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}; 
 
   

export default Carrousel;