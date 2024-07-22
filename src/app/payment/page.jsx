"use client"

import { Container } from "@mui/material";
import useAuth from "../hooks/useAuth";
import Pago from "../components/reserva/pago/pago";
import FormPagoInvitado from "../components/reserva/formPagoInvitado";
import { useState } from "react";



function Booking() {
    const isAuthenticated = useAuth();
    const [ register, setRegister ] = useState(false);
    

    return (
        <Container>
            {
                isAuthenticated || register
                ? <Pago
                    checkin='22/07/2024' checkout='25/07/2024'
                    person='2' night='3' price='2.156' suite='1 suite simple'
                />
                : <FormPagoInvitado handlePayment={()=> setRegister(true) } />
            

            }
        </Container>
    );
}

export default Booking;