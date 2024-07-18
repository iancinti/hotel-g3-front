'use client'
import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Button, Container } from '@mui/material';

import './buscador.css';

export default function Buscador() {
    const [habitacion, setHabitacion] = React.useState(1);
    const [personas, setPersonas] = React.useState(1);

    const addHabitacion = () => setHabitacion(habitacion + 1);
    const deletedHabitacion = () => {
        if (habitacion > 1) {
            setHabitacion(habitacion - 1);
        }
    };

    const addPersona = () => setPersonas(personas + 1);
    const deletedPersona = () => {
        if (personas > 1) {
            setPersonas(personas - 1);
        }
    };

    const styleDatePicker = {
        '& input': {
            color: 'white',
            textAlign: 'center',
        },'& button':{
            color: 'white'
        }
    }

    return (
        <div style={{ background: 'var(--principal)' }}>
            <Container maxWidth='xl'>
                <div className='contain sm:grid sm:grid-cols-2 sm:gap-6
                    md:flex md:justify-between md:items-center md:flex-wrap
                    gap-4'
                >
                    <div className='item'>
                            <label>CheckIn</label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                sx={styleDatePicker}
                                format='DD/MM/YYYY'
                                
                            />
                        </LocalizationProvider>
                    </div>
                    <div className='item'>
                        <label>CheckOut</label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                sx={styleDatePicker}
                                format='DD/MM/YYYY'
                            />
                        </LocalizationProvider>
                    </div>
                    <div className="item relative">
                        <label>Habitación</label>
                        <input type="number" value={habitacion} />
                        <div className='grid absolute bottom-0 right-4'>
                            <button onClick={addHabitacion}>▲</button>
                            <button onClick={deletedHabitacion}>▼</button>
                        </div>
                    </div>
                    <div className='item relative'>
                        <label>Personas</label>
                        <input type="number" value={personas} />
                        <div className='grid absolute bottom-0 right-4'>
                            <button onClick={addPersona}>▲</button>
                            <button onClick={deletedPersona}>▼</button>
                        </div>
                    </div>
                    <Button variant='contained'>
                        Buscar
                    </Button>
                </div>
            </Container>
        </div>
    );
}