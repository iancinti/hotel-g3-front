'use client';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import WifiIcon from '@mui/icons-material/Wifi';
import { Icon } from '@iconify/react';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import Boton from '../boton';


export default function CardReserva({ name, facility, price, image }) {
  return (
      <Card sx={{
          width: { xl: '54em', md: '45em', sm: '30em' },
          height: { xl: '25em', md: '20em', sm: '15em' }
      }}>

          <CardContent style={{ display: "flex", flexDirection: "row", justifyContent: "center", width: "100%", height: '100%' }}>
              <div style={{ display: 'flex', width: 'fit-content' }}>
                  <img src={image} alt="Habitación" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '1.5em', gap: '1.5em', width: '30em' }} >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
                      <Typography display="flex" fontSize={'2.25em'} fontWeight={'700'} component="div">
                          {name}
                      </Typography>
                      <Typography display="flex" flexDirection={'row'} alignItems={'center'} gap={'0.5em'} >
                          <WifiIcon sx={{ fontSize: 40 }} >  </WifiIcon>
                          <Icon width='2.25em' icon="fa6-solid:champagne-glasses" />
                          <Icon width='2.3em' icon="fa6-solid:person-swimming" />
                          <RestaurantIcon sx={{ fontSize: 40 }}>  </RestaurantIcon>
                      </Typography>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography display="flex" fontSize={'1.25em'} fontWeight={'700'} component="div">
                          {price} / por noche
                      </Typography><Boton text="Reservar"></Boton>

                  </div>
              </div>
          </CardContent>

      </Card>
  );
}