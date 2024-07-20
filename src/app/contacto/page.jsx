"use client"
import { useRouter } from "next/navigation";
import { Container } from "@mui/system";

import './contacto.css'
import { useState } from "react";

const dataForm = {
    name: '', app: '', email: '', tel: '', message: ''
}

function ContactUs() {

    const router = useRouter();
    const [ form, setForm ] = useState(dataForm);


    const onSetForm =( e )=>{
        const { name, value, className } = e.target;
        // TODO cambiar clase valid - invalid

        setForm({
            ...form,
            [name]: value
        });
    }

    const onsubmit = ( e )=>{
        e.preventDefault();
        if (validateForm()) {
            // TODO Mostrar modal de exito
            alert('Enviando Mensaje')
        }else{
            // TODO Mostrar modal error
            alert('Error')
        }
    }

    const validateForm =()=>{
        // TODO Validaciones
        for (const value of Object.values(form)) {
            if (!value.trim()) {
                return false
            }
        }

        return true;
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
                    <form className="content-frm" onSubmit={onsubmit}>
                        <div className="frm-div-input">
                            <label htmlFor="nombre">Nombre</label>
                            <input 
                                id="nombre" 
                                type="text" 
                                placeholder="Nombre/s"
                                value={form.name} name="name"
                                onChange={onSetForm}
                            />
                        </div>
                        <div className="frm-div-input">
                            <label htmlFor="apellido">Apellido</label>
                            <input 
                                id="apellido" 
                                type="text" 
                                placeholder="Apellido"
                                value={form.app} name="app"
                                onChange={onSetForm}
                            />
                        </div>
                        <div className="frm-div-input">
                            <label htmlFor="email">Email</label>
                            <input 
                                id="email" 
                                type="text" 
                                placeholder="ejemplo@gmail.com"
                                value={form.email} name="email"
                                onChange={onSetForm}
                            />
                        </div>
                        <div className="frm-div-input">
                            <label htmlFor="tel">Teléfono</label>
                            <input 
                                id="tel" 
                                type="tel" 
                                placeholder="(+xx) xxxx - xxxx"
                                value={form.tel} name="tel"
                                onChange={onSetForm}
                            />
                        </div>
                        <div className="frm-div-input">
                            <label htmlFor="message">Mensaje</label>
                            <textarea
                                id="message"
                                placeholder="Deje su consulta, le responderemos a la brevedad."
                                value={form.message}
                                name="message"
                                onChange={onSetForm}
                            ></textarea>
                        </div>
                        <div className="frm-content-btn">
                            <input type="submit" value='Enviar' />
                            <input type="button" value='Cancelar' onClick={() => {
                                router.replace('/');
                            }}/>
                        </div>
                    </form>
                </main>
            </Container>
        </Container>
    );
}

export default ContactUs;