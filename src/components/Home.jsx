import React, { useEffect, useState } from "react";
import { listFlights } from "../functions/functions";

const Home = () => {
  const [flights, setFlights] = useState(null);
  useEffect(() => {
    listFlights(setFlights);
  }, []);

  return (
    <>
      {flights !== null
        ? (flights.map((flight, index) => (
            <div key={index}>
            <h1>index:  {index} </h1>
              <h1>Precio: {flight.price.currency} {flight.price.base}</h1>
            
              <h1>Numero de Sillas: {flight.numberOfBookableSeats}</h1>
              <h1>Ultimo dia de reserva: {flight.lastTicketingDate}</h1>
              <h1>{flight.id}</h1>
              <h1>i: {index}</h1>
              <a href={`/flights/${flight.id}`}><button>Itinerarios</button></a>
              <div>_____________________________</div>
             
          
            </div>
          )))
        : ("No Hay Vuelos")}

      
    </>
  );
};
export default Home;
