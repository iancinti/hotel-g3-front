"use client"
import { Container } from "@mui/material";
import Filtro from "../components/filtro/filtro";
import CardReserva from "../components/reserva/CardReserva";
import Buscador from "../components/reserva/buscador/buscador";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import TagsFiltro from "../components/filtro/tagsFiltro";
import { listRooms } from "./listRooms";

const listOptions = [
    {
        title: 'Servicio',
        options: [
            { name: 'Wifi', checked: false },
            { name: 'Bar', checked: false },
            { name: 'Comida', checked: false },
            { name: 'TV', checked: false },
            { name: 'Estacionamiento', checked: false },
        ]
    }, {
        title: 'Habitaciones',
        options: [
            { name: 'Habitacion simple', checked: false },
            { name: 'Suite principal', checked: false },
            { name: '3 habitaciones', checked: false },
            { name: '4 habitaciones', checked: false },
        ]
    }
]

function Reserva() {

    const router = useRouter();
    const [rooms, setRooms] = useState(listRooms);
    const [optionsFilter, setOptionsFilter] = React.useState(listOptions);

    const [ tags, setTags ] = useState([]);
    const [ isOpenFilter, setOpenFilter ] = useState( null );
    
    const onChangeFilter =(event)=>{
        const { name, checked } = event.target;
        updateFilterAndTags( name, checked );
    }

    const updateFilterAndTags =(name, checked)=>{
        const updatedOptionsFilter = optionsFilter.map((item) => ({
            ...item,
            options: item.options.map((option) =>
                option.name === name ? { ...option, checked: checked } : option
            )
        }));

        setOptionsFilter(updatedOptionsFilter);

        if (checked) setTags(()=>{
            const newTags = [...tags, name];
            loadRooms( newTags );
            return newTags;
        })
        else setTags(value =>{
            const newTags = [...value.filter(f => f !== name)];
            loadRooms( newTags );
            return newTags;
        });
    }

    const onSearchRooms = ({ checkin, checkout, room, person })=>{
        const params = `checkin=${checkin}&checkout=${checkout}&room=${room}&person=${person}`;
        router.push(`/reserva?${params}`);
    }

    const loadRooms =( tags )=>{
        // ! Cambiar por llamada a Back para traer listado
        setRooms( ()=>{
            return rooms.filter((room) => {
                if (room.facility.some(facility => tags.includes(facility))) {
                    return room;
                }
            })
        });
        
    }

    return (
        <React.Fragment>
            <Buscador handledSearch={onSearchRooms}></Buscador>
            <Container maxWidth='xl' sx={{
                paddingY:'2.5rem'
            }}>
                <TagsFiltro maxWidth='xl' toogleFiltro={() => setOpenFilter(!isOpenFilter)}
                    tags={tags} onDeleteTag={(name) => updateFilterAndTags(name, false)}
                />
                <div className="flex gap-10 relative justify-center">
                    <Filtro isOpen={isOpenFilter} changeFilter={onChangeFilter} listOptions={optionsFilter}></Filtro>
                    <div className="grid gap-10">
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