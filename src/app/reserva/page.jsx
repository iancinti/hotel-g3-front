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

function Reserva() {

    const pageSize = 4;
    const router = useRouter();
    const [rooms, setRooms] = useState(null);
    const [optionsFilter, setOptionsFilter] = React.useState([]);
    const [ loading, setLoading ] = useState(true);

    const [ tags, setTags ] = useState([]);
    const [ isOpenFilter, setOpenFilter ] = useState( null );

    const [ page, setPage ] = useState( 1 );

    useEffect(() => {
        const fetchItems = async () => {
            try {
                setLoading( true );
                const [ services, listRooms ] = await Promise.all([
                    getAllServices(),
                    getAllRooms(`pageNumber=${page}&pageSize=${pageSize}`)
                ]);
                setRooms(listRooms);
                setOptionsFilter([optionsFilterDto('Servicio', services)]);
            } catch (error) {
                console.error('Error al obtener los items:', error);
            }finally{
                setLoading(false);
            }
        };

        fetchItems();
    }, [page]);

    const optionsFilterDto = ( title, data ) =>{
        return {
            title,
            options: data.map(({ id, name }) => ({ id, name, checked: false }))
        }
    }

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
        // ! Llamada a Back para traer listado
    }

    const onChangePagination =(e, value)=>{
        setPage( value );
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
                    <div className="grid gap-10">
                        { (!loading)
                            ? rooms.map((room, index) => (
                                <CardReserva
                                    key={index}
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
                        <div className="flex justify-center">
                            <Pagination
                                page={page}
                                count={3}
                                variant="outlined"
                                shape="rounded"
                                onChange={onChangePagination}
                            />
                        </div>
                    </div>
                </div>

            </Container>
        </React.Fragment>

    );
}

export default Reserva;