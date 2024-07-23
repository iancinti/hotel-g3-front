"use client"
import { useRouter } from "next/navigation";
import { Container } from "@mui/system";

import { useState } from "react";
import Boton from "../components/boton";
import { Validations } from "../utils/validations";
import { FormUtils } from "../utils/formUtils";

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
    contrasena: {
        text: '',
        validations: [Validations.required, Validations.minLength(8), Validations.isPasswordMatch('confirmarContrasena') ]
    }, 
    confirmarContrasena: {
        text: '',
        validations: [ Validations.required, Validations.isPasswordMatch('contrasena') ]
    }
}

function Registro() {

    const router = useRouter();
    const [ form, setForm ] = useState(dataForm);


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
            { form, inputs, spanError, message, key, isValid, fnOk: sendMessage }
        );
    }

    const sendMessage = ()=>{
        alert('Mensaje enviado')
    }

    return (
        <Container maxWidth='xl' sx={{
            paddingY: '80px'
        }}>
            <header className="flex justify-center">
                <h1 className="text-5xl pb-8">Registrate</h1>
            </header>
            <Container maxWidth='md'>
                <main>
                    <form id="formPago" className="content-frm" onSubmit={onsubmit} autoComplete="false">
                        <div className="frm-div-input">
                            <label htmlFor="nombre">Nombre</label>
                            <input 
                                id="formnombre" 
                                type="text" 
                                placeholder="Nombre/s"
                                value={form.nombres.text} name="nombres"
                                onChange={onSetForm}
                            />
                            <span id="name" className="text-red-500 hidden"></span>
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
                            <label htmlFor="contrasena">Contraseña</label>
                            <input 
                                id="formcontrasena" 
                                type="password" 
                                placeholder="Contraseña"
                                value={form.contrasena.text} name="contrasena"
                                onChange={onSetForm}
                            />
                            <span id="contrasena" className="text-red-500 hidden"></span>
                        </div>
                        <div className="frm-div-input">
                            <label htmlFor="confirmarContrasena">Confirmar Contraseña</label>
                            <textarea
                                id="formmessage"
                                type="isPasswordMatch"
                                placeholder="Confirma tu contraseña"
                                value={form.confirmarContrasena.text} name="confirmarContrasena"
                                onChange={onSetForm}
                            ></textarea>
                            <span id="confirmarContrasena" className="text-red-500 hidden"></span>
                        </div>
                    </form>
                    <div className="frm-content-btn justify-center pt-4">
                        <Boton text='Registrarte' type='submit' form='formPago'/>
                    </div>
                </main>
            </Container>
        </Container>
    );
}

export default Registro;