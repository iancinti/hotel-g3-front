import * as React from 'react';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';

import './card-image.css';


function CardImage({ bgColor, bgColorMain = '#D9D9D9', srcImage, title, distancia, direction }) {
    return(
        <article className='artc-contain'
            style={{
                backgroundColor: bgColor
            }}   
        >
            <header className='artc-header'>
                <img className='artc-image' src={srcImage} alt="image-portada" />
            </header>
            <main className='artc-main' style={{
                backgroundColor: bgColorMain
            }}>
                <h1 className='artc-title'>
                    <LocationOnIcon sx={{
                        marginRight: '0.5em'
                    }}></LocationOnIcon>
                    { title }
                </h1>
                <p className='artc-ditan pb-2'>
                    <SendIcon sx={{
                        marginRight: '0.5em',
                        transform: 'rotate(-45deg)'
                    }}></SendIcon>
                    { distancia }
                </p>
                <p className='artc-direction'>
                    <AttachFileIcon sx={{
                        marginRight: '0.5em',
                        transform: 'rotate(45deg)',
                        fontSize: '1.4em'
                    }}></AttachFileIcon>
                    { direction }
                </p>
            </main>
        </article>
    )
}

export default CardImage;