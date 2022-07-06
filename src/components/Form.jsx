import * as React from "react";
import { useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
// import Stack from "@mui/material/Stack";
import { Field, Form, Formik } from "formik";

let defaultDate = new Date();

export default function CountrySelect() {
  const [fechaSeleccionada, cambiarFecha] = useState(defaultDate);
  return (
    <>
      <div spacing={1} sx={{ width: 300 }} className="container mt-5">
        <Formik>
          <Form>
            <div className="row">
              <div className="col">
                <Autocomplete
                  id="origen"
                  sx={{ width: 300 }}
                  options={countries}
                  autoHighlight
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
                  value={fechaSeleccionada.toISOString().slice(0, 10)}
                  defaultValue={defaultDate.toISOString().slice(0, 16)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <div className="col">
                <Autocomplete
                  id="Destino"
                  sx={{ width: 300 }}
                  options={countries}
                  autoHighlight
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

                <Autocomplete
                  id="Adultos"
                  sx={{ width: 300 }}
                  options={passengers}
                  autoHighlight
                  getOptionLabel={(option) => option.label}
                  renderOption={(props, option) => (
                    <Box
                      component="li"
                      sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                      {...props}
                    >
                      {option.label}
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Adultos"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password", // disable autocomplete and autofill
                      }}
                    />
                  )}
                />
              </div>
              <div className="col">
                <TextField
                  sx={{ width: 300 }}
                  id="Ida"
                  label="ida"
                  value={fechaSeleccionada.toISOString().slice(0, 10)}
                  type="date"
                  defaultValue={defaultDate.toISOString().slice(0, 10)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />

                <Autocomplete
                  required
                  id="niños"
                  sx={{ width: 300 }}
                  options={passengers}
                  autoHighlight
                  getOptionLabel={(option) => option.label}
                  renderOption={(props, option) => (
                    <Box
                      component="li"
                      sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                      {...props}
                    >
                      {option.label}
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Niños"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password", // disable autocomplete and autofill
                      }}
                    />
                  )}
                />
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
}

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

const passengers = [
  { label: "1" },
  { label: "2" },
  { label: "3" },
  { label: "4" },
  { label: "5" },
  { label: "6" },
  { label: "7" },
  { label: "8" },
  { label: "9" },
  { label: "10" },
  { label: "11" },
  { label: "12" },
  { label: "13" },
  { label: "14" },
  { label: "15" },
  { label: "16" },
  { label: "17" },
  { label: "18" },
  { label: "19" },
  { label: "20" },
];
