import React from "react";



function DetailRoom({ room }) {

    return (
        <React.Fragment>
            <div className="flex my-4 p-4 bg-white">
                <h3 className="text-4xl font-bold">Descripción</h3>
            </div>
            <article className="flex flex-col pag-4 my-4 p-4 bg-white">
                <h4 className="text-2xl font-bold">¡Disfruta de una experiencia de lujo!</h4>
                <p className="py-4 text-xl">
                Un lujoso hotel en CABA, está a solo 500 metros del centro. Con espacio palaciego, arquitectura moderna. 
                Con sus elegantes interiores, este hotel es la opción ideal para una relajación tranquila o un viaje de negocios.
                </p>

                <h4 className="text-2xl font-bold">Comidas</h4>
                <p className="py-4 text-xl">
                Este hotel de lujo se encuentra en CABA y cuenta con un restaurante y un bar. El restaurante Flame N Grill funciona desde las 7:30 hasta la medianoche. Ofrece un menú de cocina variada que incluye platos continentales, chinos, indios y de Goa. Pool Deck BAR es un paraíso que ofrece una variedad de bebidas. Cuenta con una fuente de agua, pero también ofrece un ambiente agradable para disfrutar de sus bebidas.
                </p>

                <h4 className="text-2xl font-bold">Instalaciones de la habitación</h4>
                <p className="py-4 text-xl">
                Este hotel cuenta con 150 habitaciones con aire acondicionado, incluyendo 50 habitaciones superiores, 30 habitaciones Deluxe, 10 habitaciones Super Deluxe, 2 habitaciones clásicas y 5 habitaciones dúplex.
                </p>
                {/* <ul className="flex flex-col gap-4">
                    {room.facility.map((facility, index) => (
                        <li key={index}>
                            *
                            <span>
                                {facility}
                            </span>
                        </li>
                    ))
                    }
                </ul> */}
            </article>
        </React.Fragment>
    );
}

export default DetailRoom;