"use client"
import { Container } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Validations } from "../utils/validations";

// !OJO este objeto vendra desde base de datos, solo la propiedad text, el validations se lo coloca aqui
const dataForm = {
    name: {
        text: 'Miguel',
        validations: [ ]
    }, 
    app: {
        text: 'Cuellar',
        validations: [ ]
    },
    email: {
        text: 'miguel@gmail.com',
        validations: [ Validations.isMailValid ]
    },
    tel: {
        text: '+591 78071967',
        validations: [ Validations.isNumberPhone ]
    }
}

function MiPerfil() {
    const router = useRouter();
    const [form, setForm] = useState(dataForm);


    const onSetForm = (e) => {
        const input = e.target;
        const { name, value, className } = input;
        const validations = form[name].validations;

        setForm({
            ...form,
            [name]: {
                validations,
                text: value
            }
        });

    }

    const onsubmit = (e) => {
        const inputs = e.target;
        e.preventDefault();
        
        const [message, isValid, key] = validateForm();
        const spanError = document.getElementById(key);

        for (let i = 0; i < inputs.length; i++) {
            if ( key == inputs[i].name ) {
                if (!isValid) {
                    inputs[i].classList.remove('valid');
                    inputs[i].classList.add('text-red-500');
                    spanError.style.display = 'block';
                    spanError.textContent = message;
                    return;
                }
            }
        }

        if (isValid) {
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].classList.add('valid');
                inputs[i].classList.remove('text-red-500');
            }
            for (const key of Object.keys(form)) {
                const span = document.getElementById(key);
                span.style.display = 'none';
            }
            setTimeout(() => {
                alert('Perfil Cambiado con exito');
            }, 800);
        }
    }

    const validateForm = () => {
        const correct = ['Mensaje Enviado', true, null];
        for (const key of Object.keys( form )) {
            const [ message, valid, k ] = validarByKey( key );

            if(!valid){
                return [message, valid, k];
            };
        }

        return correct;
    }

    const validarByKey =( key )=>{
        const { text, validations } = form[key];
        if (validations.length > 0) {
            for (let index = 0; index < validations.length; index++) {
                const validator = validations[index];
                const [message, isValid] = validator(text);
                //? Si alguna validacion da falso, entonces se retorna el mensaje de error y la key del form
                if (!isValid) return [message, isValid, key];
            }
        }

        return ['', true, null];
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
                    <form className="content-frm" onSubmit={onsubmit}>
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
                        <div className="frm-content-btn">
                            <input type="submit" value='Enviar' />
                            <input type="button" value='Cancelar' onClick={() => {
                                router.push('/');
                            }} />
                        </div>
                    </form>
                </main>
            </Container>
        </Container>
    );
}

export default MiPerfil;