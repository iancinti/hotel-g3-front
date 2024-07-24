"use client"

import { Container } from "@mui/material";
import useAuth from "../hooks/useAuth";
import Pago from "../components/reserva/pago/pago";
import FormPagoInvitado from "../components/reserva/formPagoInvitado";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";



function Booking() {
    const isAuthenticated = useAuth();
    const [ register, setRegister ] = useState(false);
    
    const params = useSearchParams();
    const name = params.get('name');
    const checkinDate = params.get('checkinDate');
    const checkoutDate = params.get('checkoutDate');
    const typeRoom = params.get('typeRoom');
    const price = params.get('price');
    const person = params.get('person');

    return (
        <Container>
            {
            <Pago
                    checkin={checkinDate} checkout={checkoutDate}
                    price={price} typeRoom={typeRoom} name={name}
                    person={person}
            />
                // isAuthenticated || register
                // : <FormPagoInvitado handlePayment={()=> setRegister(true) } />
            

            }
        </Container>
    );
}

export default Booking;