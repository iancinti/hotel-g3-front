"use client"
import { useRouter } from "next/navigation";
import { Container } from "@mui/system";

import { useState } from "react";
import Boton from "../components/boton";
import { Validations } from "../utils/validations";
import { FormUtils } from "../utils/formUtils";
import { supabase } from "../../../lib/supabase";
import { createCustomer } from "@/service/customer";

const dataForm = {
    nombres: {
        text: '',
        validations: [ Validations.required ]
    }, 
    apellidos: {
        text: '',
        validations: [ Validations.required ]
    }, 
    correo: {
        text: '',
        validations: [Validations.required, Validations.isMailValid ]
    }, 
    phoneNumber: {
        text: '',
        validations: [Validations.required, Validations.isNumberPhone ]
    }, password: {
        text: '',
        validations: [Validations.required, Validations.minLength(8)]
    }
}

function Registro() {

    const router = useRouter();
    const [ form, setForm ] = useState(dataForm);
    const [error, setError] = useState(null);


    const onSetForm =( e )=>{
        const input = e.target;
        const { name, value } = input;
        const validations = form[name].validations;

        
        setForm({
            ...form,
            [name]: {
                validations,
                text: value
            }
        });

        const [message, isValid] = FormUtils.validarByValue( validations, value );
        FormUtils.showInfoOneInput(e.target, message, isValid );
    }

    const onsubmit = (e)=>{
        const inputs = e.target;
        e.preventDefault();
        const [message, isValid, key] = FormUtils.validateForm(form);
        const spanError = document.getElementById(key);

        FormUtils.showInfoAllForm(
            { form, inputs, spanError, message, key, isValid }
        );

        if (isValid) {
            handleSignup();
        }
    }

    const handleSignup = async () => {
        const { user, error } = await supabase.auth.signUp({
            email: form.correo.text,
            password: form.password.text,
        });

        const customer = await createCustomer({
            firstName: form.nombres.text,
            lastName: form.apellidos.text,
            email: form.correo.text,
            phoneNumber: form.phoneNumber.text,
        });

        if (error) setError(error.message);
    };

    return (
        <Container maxWidth='xl' sx={{
            paddingY: '80px'
        }}>
            <header className="flex justify-center">
                <h1 className="text-5xl pb-8">Registrate</h1>
            </header>
            <Container maxWidth='md'>
                <main>
                    <form id="forrmSignUp" className="content-frm" onSubmit={onsubmit} autoComplete="false">
                        <div className="frm-div-input">
                            <label htmlFor="nombre">Nombre</label>
                            <input 
                                id="formnombre" 
                                type="text" 
                                placeholder="Nombre/s"
                                value={form.nombres.text} name="nombres"
                                onChange={onSetForm}
                            />
                            <span id="nombres" className="text-red-500 hidden"></span>
                        </div>
                        <div className="frm-div-input">
                            <label htmlFor="apellido">Apellido</label>
                            <input 
                                id="formapellido" 
                                type="text" 
                                placeholder="Apellido"
                                value={form.apellidos.text} name="apellidos"
                                onChange={onSetForm}
                            />
                            <span id="apellidos" className="text-red-500 hidden"></span>
                        </div>
                        <div className="frm-div-input">
                            <label htmlFor="email">Correo</label>
                            <input 
                                id="formemail" 
                                type="text" 
                                placeholder="ejemplo@gmail.com"
                                value={form.correo.text} name="correo"
                                onChange={onSetForm}
                            />
                            <span id="correo" className="text-red-500 hidden"></span>
                        </div>
                        <div className="frm-div-input">
                            <label htmlFor="formTel">Telefono</label>
                            <input
                                id="formTel"
                                type="text"
                                placeholder="+xx xxxxx"
                                value={form.phoneNumber.text} name="phoneNumber"
                                onChange={onSetForm}
                            />
                            <span id="phoneNumber" className="text-red-500 hidden"></span>
                        </div>
                        <div className="frm-div-input">
                            <label htmlFor="formContra">Contraseña</label>
                            <input
                                id="formContra"
                                type="password"
                                value={form.password.text} name="password"
                                onChange={onSetForm}
                            />
                            <span id="password" className="text-red-500 hidden"></span>
                        </div>
                    </form>
                    <div className="frm-content-btn justify-center pt-4">
                        <Boton text='Registrarte' type='submit' form='forrmSignUp'/>
                    </div>
                </main>
            </Container>
            {error && <p>{error}</p>}
        </Container>
    );
}

export default Registro;