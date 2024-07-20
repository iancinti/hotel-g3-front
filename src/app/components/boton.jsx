'use client';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



export default function Boton({text, handledClick, type, form}) {

    const onClick = ()=>{
        // Se pone esta validacion ya que en tipo 'submit' no necesita la funcion
        if (handledClick) {
            handledClick();
        }
    }

    return (
        <Stack>
            <Button form={form} variant="contained" type={type} onClick={onClick}>
                {text}
            </Button>
        </Stack>
    );
  }