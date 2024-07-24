"use client"

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import WifiIcon from '@mui/icons-material/Wifi';
import { Icon } from '@iconify/react';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import DetailRoom from "./detail-room";
import Boton from "@/app/components/boton";
import { useRouter } from "next/navigation";
import { getRoomById } from "@/service/booking";

import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';


function DetalleReserva() {

    const router = useRouter();
    const { id } = useParams();
    const [ room, setRoom ] = useState(null);

    useEffect(() => {
        if (id) {
            const fetchRoom = async () => {
              try {
                const data = await getRoomById(id);
                setRoom(data);
              } catch (error) {
                console.error('Error al obtener los items:', error);
              }
            };

            fetchRoom();
        }
    }, [id]);
    
    if (!room) {
        // TODO insertar pantalla de carga
        return <div>Loading...</div>;
    }

    return (
        <Container maxWidth='xl' sx={{ paddingY: '2.5rem' }}>
            <div className="flex justify-between flex-wrap p-4 gap-10">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
                    <Typography display="flex" fontSize={'2.25em'} fontWeight={'700'} component="div" sx={{
                        cursor: 'pointer'
                    }}>
                        {room.name}
                    </Typography>
                    <Typography display="flex" flexDirection={'row'} alignItems={'center'} gap={'0.5em'} >
                        <WifiIcon sx={{ fontSize: 40 }} >  </WifiIcon>
                        <Icon width='2.25em' icon="fa6-solid:champagne-glasses" />
                        <Icon width='2.3em' icon="fa6-solid:person-swimming" />
                        <RestaurantIcon sx={{ fontSize: 40 }}>  </RestaurantIcon>
                    </Typography>
                    <div className='flex items-center'>
                        <span className='text-2xl'>{room.numberPeople}</span>
                        <EmojiPeopleIcon />
                    </div>
                </div>
                <div className="self-end">
                    <Typography display="flex" fontSize={'1.25em'} fontWeight={'700'} component="div">
                        ${room.price} / por noche
                    </Typography>
                    <Boton text="Reservar" 
                        handledClick={() => {
                            const params = `checkinDate=2024/07/25&checkoutDate=2024/07/27&name=${room.name}&typeRoom=${room.type}&price=${room.price}&person=${room.numberPeople}`;
                            router.push(`/payment?${params}`);
                        }}
                    />
                </div>
            </div>
            <div>
                {/* <img src={room.image} alt="" /> */}
            </div>
            <DetailRoom room={room}></DetailRoom>
        </Container>
    );
}

export default DetalleReserva;