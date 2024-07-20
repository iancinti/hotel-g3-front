"use client"
import { Validations } from "@/app/utils/validations";
import { Container } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormUtils } from "@/app/utils/formUtils";
import Boton from "../boton";

const dataForm = {
    name: {
        text: '',
        validations: [Validations.required]
    },
    app: {
        text: '',
        validations: [Validations.required]
    },
    email: {
        text: '',
        validations: [Validations.required, Validations.isMailValid]
    },
    tel: {
        text: '',
        validations: [Validations.required, Validations.isNumberPhone]
    }
}

function FormPagoInvitado() {
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
            {
                form, inputs, spanError, message, key, isValid,
                fnOk: goPago
            }
        );
    }

    const goPago = () => {
        alert('Llendo a pagar');
        // router.push('/ruta-pantalla-pago');
    }

    return (
        <Container maxWidth='xl' sx={{
            paddingY: '80px'
        }}>
            <header className="flex justify-center">
                <h1 className="text-5xl pb-8">Datos Personales</h1>
            </header>
            <Container maxWidth='md'>
                <main>
                    <form id="formDataPersonal" className="content-frm" onSubmit={onsubmit}>
                        <div className="frm-div-input">
                            <label htmlFor="formnombre">Nombre</label>
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
                            <label htmlFor="formapellido">Apellido</label>
                            <input
                                id="formapellido"
                                type="text"
                                placeholder="Apellido"
                                value={form.app.text} name="app"
                                onChange={onSetForm}
                            />
                            <span id="app" className="text-red-500 hidden" />
                        </div>
                        <div className="frm-div-input">
                            <label htmlFor="formemail">Email</label>
                            <input
                                id="formemail"
                                type="text"
                                placeholder="ejemplo@gmail.com"
                                value={form.email.text} name="email"
                                onChange={onSetForm}
                            />
                            <span id="email" className="text-red-500 hidden" />
                        </div>
                        <div className="frm-div-input">
                            <label htmlFor="formtel">Teléfono</label>
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
                        <Boton text='Ir a pagar' type='submit' form='formDataPersonal' />
                        <Boton text='Cancelar' handledClick={() => {
                            router.push('/ruta');
                        }} />
                    </div>
                </main>
            </Container>
        </Container>
    );
}

export default FormPagoInvitado;