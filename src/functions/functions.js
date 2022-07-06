import axios from "axios";

const listFlights = async (state) => {
  const origin = "SFO";
  const destination = "LAX";
  const departureDate = "2022-11-01";
  const returnDate = "2022-12-02";
  const adults = 2;
  const children = 2;


  const accessToken = "02OseTk81ovjI1MDtkZfhnBrGDlQ";
  const baseUrl =
    "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=" +
    origin +
    "&destinationLocationCode=" +
    destination +
    "&departureDate=" +
    departureDate +
    "&returnDate="+
    returnDate +  
    "&adults=" +
    adults +
    "&children=" +
    children;
    
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
  const departureDate = "2022-11-01";
  const returnDate = "2022-12-02";
  const adults = 2;
  const children = 2;


  const accessToken = "02OseTk81ovjI1MDtkZfhnBrGDlQ";
  const baseUrl =
    "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=" +
    origin +
    "&destinationLocationCode=" +
    destination +
    "&departureDate=" +
    departureDate +
    "&returnDate="+
    returnDate +  
    "&adults=" +
    adults +
    "&children=" +
    children;
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
