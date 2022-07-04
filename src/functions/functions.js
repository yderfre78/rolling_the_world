import axios from "axios";

const listFlights = async (state) => {
  const origin = "SFO";
  const destination = "LAX";
  const departureDate = "2022-12-01";
  const adults = 1;

  const accessToken = "TfWHO1dr9L8wIfJI72EyskdvSezt";
  const baseUrl =
    "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=" +
    origin +
    "&destinationLocationCode=" +
    destination +
    "&departureDate=" +
    departureDate +
    "&adults=" +
    adults;
  const response = await axios.get(baseUrl, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log(response.data.data);
  state(response.data.data);
  console.log( `DATA.ID2: ${response.data.data[3].id}`);
  return response.data.data;
};

const fligthUnique = async (id, state) => {
  const origin = "SFO";
  const destination = "LAX";
  const departureDate = "2022-12-01";
  const adults = 1;

  const accessToken = "TfWHO1dr9L8wIfJI72EyskdvSezt";
  const baseUrl =
    "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=" +
    origin +
    "&destinationLocationCode=" +
    destination +
    "&departureDate=" +
    departureDate +
    "&adults=" +
    adults;
  const response = await axios.get(baseUrl, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log(response.data.data[id-1]);
  state(response.data.data);
  console.log( `DATA.ID2: ${response.data.data[id-1]}`);
  return response.data.data[id-1];
};

export { listFlights };
export { fligthUnique };
