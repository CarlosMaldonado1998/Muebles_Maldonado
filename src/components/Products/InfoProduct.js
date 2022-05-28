import { Grid, Typography } from "@mui/material";
import React from "react";

const InfoProduct = ({ dataProduct }) => {
  console.log("data", dataProduct);
  return (
    <>
      <Grid>
        <Typography py={1} variant="h4" color="primary">
          {dataProduct.name}
        </Typography>
        <Typography color="secondary">{dataProduct.category_id}</Typography>
        <Typography py={2}>{dataProduct.description}</Typography>
      </Grid>
    </>
  );
};

export default InfoProduct;
