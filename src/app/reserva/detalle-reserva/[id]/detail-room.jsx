import React from "react";



function DetailRoom({ room }) {

    return (
        <React.Fragment>
            <div className="flex my-4 p-4 bg-white">
                <h3 className="text-4xl font-bold">Descripción</h3>
            </div>
            <article className="flex flex-col pag-4 my-4 p-4 bg-white">
                <h4 className="text-2xl font-bold">Enjoy A Luxurious Experience!</h4>
                <p className="py-4 text-xl">
                    A luxurious hotel in Duba, Sea view is just 500 meters away from the main center. Featuring palatial space, modern architecture
                    and stylish interiors, this hotel is an ideal choice for a peaceful relaxation or a business trip.
                </p>

                <h4 className="text-2xl font-bold">Dining</h4>
                <p className="py-4 text-xl">
                    The luxurious hotel in dubai features an in-house restaurant and a bar. Flame N Grill restaurant operates from 7.30 AM till midnight. It offers multi-cuisine menu including Continental, Chinese, Indian and Goan dishes. Pool Deck BAR is a paradise providing a range of beverages. Featuring a water fountain, it also offers a pleasant ambience to enjoy your drinks.
                </p>

                <h4 className="text-2xl font-bold">Room Facilities</h4>
                <p className="py-4 text-xl">
                    This hotel has 150 air-conditioned rooms including 50 Superior Rooms, 30 Deluxe Rooms, 10 Super Deluxe Rooms, 2 Classic Rooms and 5 Duplex Rooms.
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