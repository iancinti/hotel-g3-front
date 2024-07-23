"use client"
import { Button, Container } from "@mui/material";
import AccordionPago from "./accordion-pago";
import { useState } from "react";
import Boton from "../../boton";

function Pago(
    { checkin, checkout, person, suite, night, price }
) {

    // TODO definir logica de negocio, el precio sube si se queda mas noche? o tambien influye el numero de personas
    const onChangePrice = ( night )=>{
        // setPrice(  );
    }

    const onPagar =()=>{

        alert(`${checkin}, ${checkout}, ${person}, ${suite}, ${night}, ${price}` );
    }

    return (
        <Container maxWidth='xl'>
            <main style={{ background: 'white', margin: '50px 0' }}
                className="p-12">
                <section className="grid md:grid-cols-2">
                    <div className="flex justify-center items-start flex-col mb-4">
                        <header className="text-5xl"> Habitacion 1 </header>
                        <p className="text-4xl">
                            Servicios
                        </p>
                    </div>
                    <div className="flex justify-end">
                        <img style={{
                            width: '100%'
                        }} src="images/banners/fondo-pago.png" alt="" />
                    </div>
                </section>
                <section className="md:text-2xl">
                    <div className="flex justify-between mt-4">
                        <div className="py-2">
                            <h2>Check in</h2>
                            <span> {checkin} </span>
                        </div>
                        <div className="py-2 text-end">
                            <h2>Check out</h2>
                            <span> {checkout} </span>
                        </div>
                    </div>

                    <div className="py-6">
                        <AccordionPago
                            night={night}
                            suite={suite}
                            person={person}
                            changePrice={onChangePrice}
                        ></AccordionPago>
                    </div>
                    <div>
                        <h1 className="text-2xl pb-4">Detalles de Pago</h1>
                        <div className="flex justify-between">
                            <h2>Precio</h2>
                            <span> ${price} </span>
                        </div>
                    </div>
                    <div className="flex justify-end pt-4">
                        <Boton text='Pagar' handledClick={onPagar}/>
                    </div>
                </section>
            </main>
        </Container>
    );
}

export default Pago;