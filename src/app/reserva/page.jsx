"use client"
import { Container } from "@mui/material";
import Filtro from "../components/filtro/filtro";
import CardReserva from "../components/reserva/CardReserva";
import Buscador from "../components/reserva/buscador/buscador";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import TagsFiltro from "../components/filtro/tagsFiltro";

const listRooms = [
    {
        id: '1',
        name: 'Cuarto 1',
        facility: ['wifi','comida' ],
        price: '$1.830',
        image: 'images/reserva.jpg'
    },{
        id: '2',
        name: 'Cuarto 2',
        facility: ['piscina', 'bar'],
        price: '$1.500',
        image: '/images/Imagen.svg'
    }
]

function Reserva() {

    const router = useRouter();
    const searchParams = useSearchParams();
    const [rooms, setRooms] = useState(listRooms);

    const onChangeFilter =()=>{

    }

    const onSearchRooms = ({ checkin, checkout, room, person })=>{
        const params = `checkin=${checkin}&checkout=${checkout}&room=${room}&person=${person}`;
        router.push(`/reserva?${params}`);
    }


    return (
        <React.Fragment>
            <Buscador handledSearch={onSearchRooms}></Buscador>
            <Container maxWidth='xl' sx={{
                paddingY:'3rem'
            }}>
                <TagsFiltro maxWidth='xl'></TagsFiltro>
                <div className="flex gap-12">
                    <Filtro></Filtro>
                    <div className="grid gap-12">
                        {
                            rooms.map(({ id, name, facility, price, image }) => (
                                <CardReserva
                                    key={id}
                                    name={name}
                                    facility={facility}
                                    price={price}
                                    image={image}
                                />
                            ))
                        }
                    </div>
                </div>

            </Container>
        </React.Fragment>

    );
}

export default Reserva;