"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { FaTrash } from 'react-icons/fa';

export default function Carrousel  ({ initialImages , showRemoveButton = true})  {
    const [images, setImages] = useState(initialImages);
   
      
    const handleRemoveImage = (index) => {
      const newImages = images.filter((_, i) => i !== index);
      setImages(newImages);
    };
    
    const carrouselStyle ={
        height: '40em',
        margin: '3em auto',
    };

    const iconStyle = {
        position: 'absolute',
        top: '1.2em',
        right: '1.2em',
        cursor: 'pointer',
        color: 'red',
        marginRight: '2em'
    };
    
    return(
        <div style={carrouselStyle}>
            <Carousel showThumbs={false}>
                {images.map((image, index) => (
                    <div key={index} style={{ position: 'relative', width: '100%', height: '40em' }}>
                        <Image
                            src={image.src}
                            alt={image.alt}          
                            quality={75}
                            style={{ objectFit: 'cover', width: '40em', height: '40em' }}
                            unoptimized
                            loading='eager'
                            priority={index === 0}
                        />
                        {showRemoveButton && (
                        <FaTrash style={iconStyle} onClick={() => handleRemoveImage(index)} />
                    )}
                        <p className="legend">{image.caption}</p>
                    </div>
                ))}
            </Carousel>
            
        </div>
    );
}; 

