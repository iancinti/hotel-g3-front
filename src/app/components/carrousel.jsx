"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { FaTrash } from 'react-icons/fa';

export default function Carrousel  ({ initialImages , showRemoveButton = true, alt})  {
    const handleRemoveImage = (idImage) => {
        
    };
    
    const urlImg = 'https://utennwehrdbsrygnbwyk.supabase.co/storage/v1/object/public/images/';

    const carrouselStyle ={
        height: 'auto',
        margin: '3em auto',
        width: '40em',
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
                {initialImages.map((image) => (
                    <div key={image.idImage} style={{ position: 'relative', width: '100%', height: '40em' }}>
                        <Image
                            src={urlImg + image.imageUrl['0']}
                            alt={'Habitacion'}
                            quality={75}
                            style={{ objectFit: 'cover' }}
                            unoptimized
                            loading='eager'
                            width={600}
                            height={400}
                        />
                        {showRemoveButton && (
                        <FaTrash style={iconStyle} onClick={() => handleRemoveImage(image.idImage)} />
                    )}
                    </div>
                ))}
            </Carousel>
            
        </div>
    );
}; 

