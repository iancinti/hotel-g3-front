'use client';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



export default function Boton({text, handledClick}) {

    const onClick = ()=>{
        handledClick();
    }

    return (
        <Stack>
            <Button variant="contained" onClick={onClick}>
                {text}
            </Button>
        </Stack>
    );
  }