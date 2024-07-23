'use client';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import WifiIcon from '@mui/icons-material/Wifi';
import { Icon } from '@iconify/react';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import Boton from '../boton';
import { useRouter } from 'next/navigation';

import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';


export default function CardReserva({ room }) {

    const router = useRouter();
    const pathDetail = '/reserva/detalle-reserva';

    
    const redirectDetailRoom =()=>{
        router.push( `${pathDetail}/${room.id}` );
    }

    const redirectBooking =()=>{
        router.push('/payment');
    }

    return (
      <Card sx={{ width: { xl: '50em'} }}>
        <CardContent>
          <div className='flex justify-center flex-wrap hover-img' style={{
            width: "100%", height: '100%'}}
          >
            <div style={{ display: 'flex', width: 'fit-content', overflow: 'hidden' }}>
              <img src='/images/reserva.jpg' alt="Habitación" style={{
                cursor: 'pointer', width: '300px'
              }}
                className='image-rotate'
                onClick={redirectDetailRoom} />
            </div>
            <div style={{
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              padding: '0 1.5em', gap: '1.5em', flexGrow: '1'
            }} >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
                <Typography display="flex" fontSize={'2.25em'} fontWeight={'700'} component="div" sx={{
                  cursor: 'pointer'
                }} onClick={redirectDetailRoom}>
                  {room.name} <br />
                  ({room.type})
                </Typography>
                <Typography display="flex" flexDirection={'row'} alignItems={'center'} gap={'0.5em'} >
                  <WifiIcon sx={{ fontSize: 40 }} >  </WifiIcon>
                  <Icon width='2.25em' icon="fa6-solid:champagne-glasses" />
                  <Icon width='2.3em' icon="fa6-solid:person-swimming" />
                  <RestaurantIcon sx={{ fontSize: 40 }}>  </RestaurantIcon>
                </Typography>
              </div>
              <div className='flex items-center'>
                <span className='text-2xl'>{room.numberPeople}</span>
                <EmojiPeopleIcon />
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography display="flex" fontSize={'1.4em'} fontWeight={'700'} component="div">
                  ${room.price}.00 / por noche
                </Typography>
                <Boton text="Reservar" handledClick={redirectBooking}></Boton>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
  );
}