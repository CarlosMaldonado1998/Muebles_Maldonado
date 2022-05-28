import React, { useState } from "react";
import { Grid, Typography, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


const PriceProduct = ({ listPrices }) => {
  const [count, setCount] = useState(0);

  const handleChangeCount = (event) => {
    setCount(event.target.value);
  };

  console.log("prices", listPrices);
  return (
    <>
      <Grid>
        {listPrices.length > 0 ? (
          <>
            {listPrices.length > 1 ? (
              <>
                <Typography color="secondary" sx={{ fontWeight: 600 }}>
                  Seleccione su medida: 
                </Typography>
                <FormControl fullWidth>
                  <Select
                    labelId="dimension"
                    id="select-dimension"
                    value={count}
                    onChange={handleChangeCount}
                  >
                    {listPrices.map((item, index) => (
                      <MenuItem value={index}>{item.dimension}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Typography
                  py={2}
                  color="secondary"
                  variant="h3"
                  align="center"
                >
                  $ {listPrices[count].value}
                </Typography>
              </>
            ) : (
              <Grid>
                <Typography color="secondary" sx={{ fontWeight: 600 }}>
                  Medidas:
                </Typography>
                <Typography>{listPrices[0].dimension}</Typography>
                <Typography
                  py={2}
                  color="secondary"
                  variant="h3"
                  align="center"
                >
                  $ {listPrices[0].value}
                </Typography>
              </Grid>
            )}
            <Grid align="center">
              <Button variant="contained">Solicitalo aquí</Button>
            </Grid>
          </>
        ) : null}
      </Grid>
    </>
  );
};

export default PriceProduct;
