'use client'
import './buscador.css';

import * as React from 'react';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Container } from '@mui/material';

import { Validations } from '@/app/utils/validations';

import Boton from '../../boton';
import dayjs from 'dayjs';

const dataForm = {
    checkin: dayjs(),
    checkout: dayjs(),
    room: '2',
    person: '3'
}

export default function Buscador({ handledSearch }) {
    const [form, setForm] = React.useState(dataForm);
    const maxRooms = 6;
    const maxPerson = 6;
    const dateFormat = 'DD/MM/YYYY';

    const onSetForm = (name, value) => {
        setForm({
            ...form,
            [name]: value,
        });
    }

    const onsubmit = () => {
        if (Validations.allFieldRequired(form)) {
            const checkin = form.checkin.format(dateFormat);
            const checkout = form.checkout.format(dateFormat);

            handledSearch({ checkin, checkout});
        }
    }

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
                                format={dateFormat}
                                selected={form.checkin}
                                onChange={(date)=> onSetForm( 'checkin', date ) }
                            />
                        </LocalizationProvider>
                    </div>
                    <div className='item'>
                        <label>CheckOut</label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                sx={styleDatePicker}
                                format={dateFormat}
                                selected={form.checkout}
                                onChange={(date) => onSetForm('checkout', date)}
                            />
                        </LocalizationProvider>
                    </div>
                    <div className="item relative">
                        <label>Habitación</label>
                        <input type="number" value={form.room} readOnly/>
                        <div className='grid absolute bottom-0 right-4'>
                            <button onClick={() => {
                                if (form.room < maxRooms) {
                                    onSetForm('room', +form.room + 1)
                                }
                            }}>▲</button>
                            <button onClick={()=>{
                                if (+form.room > 1) {
                                    onSetForm('room', +form.room - 1);
                                }
                            }}>▼</button>
                        </div>
                    </div>
                    <div className='item relative'>
                        <label>Personas</label>
                        <input type="number" value={form.person} readOnly/>
                        <div className='grid absolute bottom-0 right-4'>
                            <button onClick={() => {
                                if (form.person < maxPerson) {
                                    onSetForm('person', +form.person + 1)
                                }
                            }}>▲</button>
                            <button onClick={() => {
                                if (+form.person > 1) {
                                    onSetForm('person', +form.person - 1);
                                }
                            }}>▼</button>
                        </div>
                    </div>
                    <Boton text='Buscar' handledClick={onsubmit}>
                    </Boton>
                </div>
            </Container>
        </div>
    );
}