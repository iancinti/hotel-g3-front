'use client';
import * as React from 'react';
import { Typography } from '@mui/material';
function Service(){
    const h1style = {
        textAlign: 'center',
        fontSize: '2.5em',
        color: '#081928',
        fontWeight: '700',
        margin: '2em',
      }
    return (
        <div>
            <Typography style={h1style} >NUESTRAS HABITACIONES</Typography>
        </div>
        

    );
};
export default Service;