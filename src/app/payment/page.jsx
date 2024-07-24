"use client"

import { Container } from "@mui/material";
import { useEffect } from 'react';
import Pago from "../components/reserva/pago/pago";
import FormPagoInvitado from "../components/reserva/formPagoInvitado";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "../../../lib/supabase";



function Booking() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const session = supabase.auth.getSession();
        setUser(session?.user ?? null);

        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            setUser(session?.user ?? null);
        });

        return () => {
            authListener?.subscription.unsubscribe();
        };
    }, []);

    const handleSignup = async ({ name, app, email, tel }) => {
        const { user, error } = await supabase.auth.signUp({
            email,
            phoneNumber: tel,
        });
        if (error) setError(error.message);
    };

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
                (!user) 
                    ? <FormPagoInvitado handlePayment={handleSignup}/>
                : <Pago
                        checkin={checkinDate} checkout={checkoutDate}
                        price={price} typeRoom={typeRoom} name={name}
                        person={person}
                    />
            }
            {error && <p>{error}</p>}
        </Container>
    );
}

export default Booking;