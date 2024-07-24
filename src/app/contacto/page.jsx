"use client"
import { useRouter } from "next/navigation";
import { Container } from "@mui/system";

import { useState } from "react";
import Boton from "../components/boton";
import { Validations } from "../utils/validations";
import { FormUtils } from "../utils/formUtils";

const dataForm = {
    name: {
        text: '',
        validations: [ Validations.required ]
    }, app: {
        text: '',
        validations: [ Validations.required ]
    }, email: {
        text: '',
        validations: [Validations.required, Validations.isMailValid ]
    }, tel: {
        text: '',
        validations: [Validations.required, Validations.isNumberPhone ]
    }, message: {
        text: '',
        validations: [ Validations.required ]
    }
}

function ContactUs() {

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
                <h1 className="text-5xl pb-8">Contactanos</h1>
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
                                value={form.name.text} name="name"
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
                                value={form.app.text} name="app"
                                onChange={onSetForm}
                            />
                            <span id="app" className="text-red-500 hidden"></span>
                        </div>
                        <div className="frm-div-input">
                            <label htmlFor="email">Email</label>
                            <input 
                                id="formemail" 
                                type="text" 
                                placeholder="ejemplo@gmail.com"
                                value={form.email.text} name="email"
                                onChange={onSetForm}
                            />
                            <span id="email" className="text-red-500 hidden"></span>
                        </div>
                        <div className="frm-div-input">
                            <label htmlFor="tel">Teléfono</label>
                            <input 
                                id="formtel" 
                                type="tel" 
                                placeholder="(+xx) xxxx - xxxx"
                                value={form.tel.text} name="tel"
                                onChange={onSetForm}
                            />
                            <span id="tel" className="text-red-500 hidden"></span>
                        </div>
                        <div className="frm-div-input">
                            <label htmlFor="message">Mensaje</label>
                            <textarea
                                id="formmessage"
                                placeholder="Deje su consulta, le responderemos a la brevedad."
                                value={form.message.text}
                                name="message"
                                onChange={onSetForm}
                            ></textarea>
                            <span id="message" className="text-red-500 hidden"></span>
                        </div>
                    </form>
                    <div className="frm-content-btn justify-center pt-4">
                        <Boton text='Enviar' type='submit' form='formPago'/>
                        <Boton text='Cancelar' handledClick={() => {
                            router.push('/');
                        }}/>
                    </div>
                </main>
            </Container>
        </Container>
    );
}

export default ContactUs;