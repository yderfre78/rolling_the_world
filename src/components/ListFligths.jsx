import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fligthUnique } from "../functions/functions";

const ListFligth = () => {
  const { id } = useParams();
  const [flights, setFlights2] = useState(null);
  useEffect(() => {
    fligthUnique(id, setFlights2);
  }, [id]);

  return (
    <>
      {flights !== null ? (
        <div>
          <h1>Precio: {flights[id-1].price.currency} {flights[id].price.base}</h1>
          <h1> itinerrario: {flights[id-1].itineraries.lastTicketingDate}</h1>
          <h1>Numero de Sillas: {flights[id-1].numberOfBookableSeats}</h1>
          <h1>Ultimo dia de reserva: {flights[id-1].lastTicketingDate}</h1>
          <h1>{flights[id-1].id}</h1>

        </div>
      ) : (
        "No Hay Vuelos"
      )}
    </>
  );
}
export default ListFligth;

