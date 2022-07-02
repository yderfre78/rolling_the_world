import React, {useEffect, useState} from "react";
import { listFlights } from "../functions/functions";

const Home = () => {
  const [flights, setFlights] = useState(null);
  useEffect(() => {
    listFlights(setFlights);
  },[]);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
export default Home;

