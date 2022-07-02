import axios from "axios";

const listFlights = async (state) => {

const origin = "SFO";
const destination = "LAX";
const departureDate = "2022-12-01";
const adults = 1;

  const accessToken = "rxLym2bjW2AzPVhyG5mj4eKLeq2u";
  const baseUrl =
    "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=" +
    origin +
    "&destinationLocationCode=" +
    destination +
    "&departureDate=" +
    departureDate +
    "&adults=" +
    adults +
    "&max=2";
  const response = await axios.get(baseUrl, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log(response.data.data);
  return response.data.data;
};

export { listFlights };
