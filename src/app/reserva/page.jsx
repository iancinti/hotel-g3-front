"use client"
import { Container, Pagination } from "@mui/material";
import Filtro from "../components/filtro/filtro";
import CardReserva from "../components/reserva/CardReserva";
import Buscador from "../components/reserva/buscador/buscador";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TagsFiltro from "../components/filtro/tagsFiltro";
import { getAllServices } from "@/service/services";
import CardReservaSkeleton from "@/skeleton-loaders/cardReservaSkeleton";
import { getAllRooms } from "@/service/booking";
import { roomTypes } from "./roomtypes";

function Reserva() {

    const pageSize = 4;
    const router = useRouter();
    const [rooms, setRooms] = useState(null);
    const [optionsFilter, setOptionsFilter] = React.useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ count, setCount ] = useState(0);

    const [ tags, setTags ] = useState([]);
    const [ isOpenFilter, setOpenFilter ] = useState( null );

    const [ page, setPage ] = useState( 1 );

    useEffect(() => {
        const fetchItems = async () => {
            try {
                setLoading( true );
                const [ services, {list, total} ] = await Promise.all([
                    (optionsFilter.length == 0)
                        ? getAllServices() : '',
                    getAllRooms({
                        page,
                        pageSize,
                        // types: 
                        // serviceIds: tags.toString()
                    })
                ]);

                setCount(Math.ceil(total / pageSize));
                setRooms(list);
                if (typeof services != 'string'){
                    setOptionsFilter([
                        optionsFilterDto('Servicio', services),
                        roomTypes
                    ]);
                }


            } catch (error) {
                console.error('Error al obtener los items:', error);
            }finally{
                setLoading(false);
            }
        };

        fetchItems();
    }, [page, tags]);

    const optionsFilterDto = ( title, data ) =>{
        return {
            title,
            options: data.map(({ id, name }) => ({ id, name, checked: false }))
        }
    }

    const onChangeFilter =(event)=>{
        const { id, name, checked } = event.target;
        updateFilterAndTags( name, checked, id );
    }

    const updateFilterAndTags =(name, checked, id)=>{
        const updatedOptionsFilter = optionsFilter.map((item) => ({
            ...item,
            options: item.options.map((option) =>
                option.name === name ? { ...option, checked: checked } : option
            )
        }));

        setOptionsFilter(updatedOptionsFilter);

        if (checked) setTags(()=>{
            const newTags = [...tags, name];
            return newTags;
        })
        else setTags(value =>{
            const newTags = [...value.filter(f => f !== name)];
            return newTags;
        });
    }

    const onSearchRooms = ({ checkin, checkout })=>{
        
    }

    const onChangePagination =(e, value)=>{
        setPage( value );
    }

    const onBooking = ({ name, type, price, numberPeople })=>{
        const params = `checkinDate=2024/07/25&checkoutDate=2024/07/27&name=${name}&typeRoom=${type}&price=${price}&person=${numberPeople}`;
        router.push(`payment?${params}`);
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
                    <Filtro isOpen={isOpenFilter} changeFilter={onChangeFilter} listOptions={optionsFilter} loading={loading}></Filtro>
                    <div className="grid gap-10 flex-grow">
                        {(rooms && !loading)
                            ? rooms.map((room) => (
                                <CardReserva
                                    handleClick={onBooking}
                                    key={room.idRoom}
                                    room={room}
                                />
                            ))
                            :
                            <>
                                <CardReservaSkeleton></CardReservaSkeleton>
                                <CardReservaSkeleton></CardReservaSkeleton>
                                <CardReservaSkeleton></CardReservaSkeleton>
                                <CardReservaSkeleton></CardReservaSkeleton>
                            </>
                        }
                        {count > 0
                            ? <div className="flex justify-center">
                                <Pagination
                                    page={page}
                                    count={count}
                                    variant="outlined"
                                    shape="rounded"
                                    onChange={onChangePagination}
                                />
                            </div> : null
                        }
                    </div>
                </div>

            </Container>
        </React.Fragment>

    );
}

export default Reserva;