"use client"
import { Container } from "@mui/material";
import AccordionPago from "./accordion-pago";
import AlertBoton from "../../alertBoton";
import { createBooking } from "@/service/booking";
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

function Pago(
    { checkin, checkout, price, typeRoom, name, person }
) {

    // TODO definir logica de negocio, el precio sube si se queda mas noche? o tambien influye el numero de personas
    // const onChangePrice = ( night )=>{
    //     // setPrice(  );
    // }

    const saveBooking = async () => {
        const checkInDate = new Date( checkin );
        const checkOutDate = new Date( checkout );

        const data = await createBooking({
            id: 0,
            idCustomer: 1,
            checkInDate,
            checkOutDate
        });
        // console.log(data)
    }

    return (
        <Container maxWidth='xl'>
            <main style={{ background: 'white', margin: '50px 0' }}
                className="p-12">
                <section className="grid md:grid-cols-2">
                    <div className="flex justify-center items-start flex-col mb-4">
                        <header className="text-5xl"> { name } </header>
                        <p className="text-4xl">
                            ( {typeRoom } )
                        </p>
                        <div className='flex items-center pt-8'>
                            <span className='text-2xl'>{person}</span>
                            <EmojiPeopleIcon />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <img style={{
                            width: '100%'
                        }} src="banners/fondo-pago.png" alt="" />
                    </div>
                </section>
                <section className="md:text-2xl">
                    <div className="flex justify-between mt-4">
                        <div className="py-2">
                            <h2>Check in</h2>
                            <span> {checkin} </span>
                        </div>
                        <div className="py-2 text-end">
                            <h2>Check out</h2>
                            <span> {checkout} </span>
                        </div>
                    </div>

                    <div className="py-6">
                        <AccordionPago
                            night='2'
                            suite={typeRoom}
                            person='4'
                            changePrice={()=>{
                                
                            }}
                        ></AccordionPago>
                    </div>
                    <div>
                        <h1 className="text-2xl pb-4">Detalles de Pago</h1>
                        <div className="flex justify-between">
                            <h2>Precio</h2>
                            <span> ${price} </span>
                        </div>
                    </div>
                    <div className="flex justify-end pt-4">
                        <AlertBoton handleClick={saveBooking} text="Su pago fue realizado" name="PAGAR"/>
                    </div>
                </section>
            </main>
        </Container>
    );
}

export default Pago;