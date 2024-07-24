"use client"
import * as React from 'react';
import { Typography } from '@mui/material';


function Attractions() {
      const h1style = {
        textAlign: 'center',
        fontSize: '2.5em',
        color: '#081928',
        fontWeight: '700',
        margin: '3em',
      }
      const h1style2 ={
        ...h1style,
        textAlign: 'left',
      }
    return(
        <div >
            <Typography style={h1style} >LUGARES TURÍSTICOS</Typography>
        </div>
        
    );
}; 
 
   

export default Attractions;
