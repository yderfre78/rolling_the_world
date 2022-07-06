import * as React from "react";
import { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { withRouter } from "react-router-dom";
// import Stack from "@mui/material/Stack";
import { Field, Form, Formik } from "formik";

let defaultDate = new Date();

export default function CountrySelect() {
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");
  const [regreso, setRegreso] = useState("");
  const [adultos, setAdultos] = useState("");
  const [ninos, setNinos] = useState("");
  const [ida, setIda] = useState("");

  const [fechaSeleccionada] = useState(defaultDate);
  const handleChange = (event) => {
    setAdultos(event.target.value);
    setNinos(event.target.value);
  };
  return (
    <>
      <div spacing={1} sx={{ width: 300 }} className="container mt-5">
        <Formik>
          <Form
            onSubmit={(ev) => {
              ev.preventDefault();
              const origen = ev.target.origen.value;
              const destino = ev.target.destino.value;

              buscar(origen, destino, regreso, ida, adultos, ninos);
            }}
          >
            <div className="row">
              <div className="col">
                <Autocomplete
                  id="origen"
                  sx={{ width: 300 }}
                  options={countries}
                  autoHighlight
                  onChange={(ev) => setOrigen(ev.target.value)}
                  getOptionLabel={(option) => option.code}
                  renderOption={(props, option) => (
                    <Box
                      component="li"
                      sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                      {...props}
                    >
                      {option.label} ({option.code})
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Origen"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password", // disable autocomplete and autofill
                      }}
                    />
                  )}
                />

                <TextField
                  sx={{ width: 300 }}
                  id="Regreso"
                  label="Regreso"
                  type="date"
                  onChange={(ev) => setRegreso(ev.target.value)}
                  value={fechaSeleccionada.toISOString().slice(0, 10)}
                  defaultValue={defaultDate.toISOString().slice(0, 16)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <div className="col">
                <Autocomplete
                  id="destino"
                  sx={{ width: 300 }}
                  options={countries}
                  autoHighlight
                  onChange={(ev) => setDestino(ev.target.value)}
                  getOptionLabel={(option) => option.code}
                  renderOption={(props, option) => (
                    <Box
                      component="li"
                      sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                      {...props}
                    >
                      {option.label} ({option.code})
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Destino"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password", // disable autocomplete and autofill
                      }}
                    />
                  )}
                />

                <Select
                  sx={{ width: 300 }}
                  labelId="adultos"
                  id="adultos"
                  value={adultos}
                  label="Adultos"
                  onChange={handleChange}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                </Select>
              </div>
              <div className="col">
                <TextField
                  sx={{ width: 300 }}
                  id="Ida"
                  label="ida"
                  onChange={(ev) => setIda(ev.target.value)}
                  value={fechaSeleccionada.toISOString().slice(0, 10)}
                  type="date"
                  defaultValue={defaultDate.toISOString().slice(0, 10)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />

                <Select
                  sx={{ width: 300 }}
                  labelId="ninos"
                  id="ninos"
                  value={ninos}
                  label="niños"
                  onChange={handleChange}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                </Select>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Buscar Vuelos
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
}

const buscar = (origen, destino, regreso, ida, adultos, ninos) => {
  console.log(origen, destino, regreso, ida, adultos, ninos);
};

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
const countries = [
  { code: "ATL", label: "Atlanta" },
  { code: "BOS", label: "Boston" },
  { code: "CHI", label: "Chicago" },
  { code: "DAL", label: "Dallas" },
  { code: "DEN", label: "Denver" },
  { code: "LAX", label: "Los Angeles" },
  { code: "NYC", label: "New York City" },
  { code: "PHX", label: "Phoenix" },
  { code: "SAN", label: "San Diego" },
  { code: "SEA", label: "Seattle" },
  { code: "WAS", label: "Washington" },
];
