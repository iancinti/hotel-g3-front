"use client"
import { Container } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Validations } from "../utils/validations";
import Boton from "../components/boton";
import { FormUtils } from "../utils/formUtils";

const dataForm = {
    name: {
        text: 'Miguel',
        validations: [ Validations.required ]
    }, 
    app: {
        text: 'Cuellar',
        validations: [ Validations.required ]
    },
    email: {
        text: 'miguel@gmail.com',
        validations: [ Validations.required, Validations.isMailValid ]
    },
    tel: {
        text: '+591 78071967',
        validations: [ Validations.required, Validations.isNumberPhone ]
    }
}

function MiPerfil() {
    const router = useRouter();
    const [form, setForm] = useState(dataForm);


    const onSetForm = (e) => {
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

        const [message, isValid] = FormUtils.validarByValue(validations, value);
        FormUtils.showInfoOneInput(e.target, message, isValid);
    }

    const onsubmit = (e) => {
        const inputs = e.target;
        e.preventDefault();
        
        const [message, isValid, key] = FormUtils.validateForm(form);
        const spanError = document.getElementById(key);

        FormUtils.showInfoAllForm(
            { form, inputs, spanError, message, key, isValid,
                fnOk: changeDatePerfil
            }
        );
    }

    const changeDatePerfil =()=>{
        alert('Perfil actualizado')
    }

    return (
        <Container maxWidth='xl' sx={{
            paddingY: '80px'
        }}>
            <header className="flex justify-center">
                <h1 className="text-5xl pb-8">Mi Perfil</h1>
            </header>
            <Container maxWidth='md'>
                <main>
                    <form id="formPerfil" className="content-frm" onSubmit={onsubmit}>
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
                            <span id="app" className="text-red-500 hidden"/>
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
                            <span id="email" className="text-red-500 hidden"/>
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
                            <span id="tel" className="text-red-500 hidden">df</span>
                        </div>
                    </form>
                    <div className="frm-content-btn justify-center pt-4">
                        <Boton text='Enviar' type='submit' form='formPerfil' />
                        <Boton text='Cancelar' handledClick={() => {
                            router.push('/');
                        }} />
                    </div>
                </main>
            </Container>
        </Container>
    );
}

export default MiPerfil;