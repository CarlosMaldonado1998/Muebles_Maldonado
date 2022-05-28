import { Grid, Paper, Typography } from "@mui/material";
import React from "react";

const DetailProduct = ({ dataProduct }) => {
  console.log("data", dataProduct);

  return (
    <>
      <Grid>
        <Paper elevation={8}>
          <Typography variant="h6" p={2} color="secondary">
            Descripción
          </Typography>
        </Paper>
        <Grid p={2}>
          <Typography py={2}>
            <strong>Código:</strong> {dataProduct.code}
          </Typography>
          <Typography py={2}>
            <strong>Tiempo de entrega: </strong> {dataProduct.delivery_time}
          </Typography>
          <Typography py={2}>
            <strong>Garantía: </strong> {dataProduct.warranty}
          </Typography>
          <Typography py={2}>
            <strong>Material:</strong> {dataProduct.material}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default DetailProduct;
