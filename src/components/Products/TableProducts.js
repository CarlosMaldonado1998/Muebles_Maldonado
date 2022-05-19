import { Grid, Pagination } from "@mui/material";
import React, { useState, useEffect } from "react";
import CardProduct from "./CardProduct";

const TableProducts = ({ infoProducts }) => {
  const itemsPerPage = 9;
  const [page, setPage] = useState(1);
  const [noOfPages, setNoOfPages] = useState(
    Math.ceil(infoProducts.length / itemsPerPage)
  );
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    setNoOfPages(Math.ceil(infoProducts.length / itemsPerPage));
  }, [infoProducts]);
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {infoProducts
          .slice((page - 1) * itemsPerPage, page * itemsPerPage)
          .map((product) => (
            <Grid p={1} key={`productlist-${product.id}`}>
              <CardProduct infoProduct={product} />
            </Grid>
          ))}
      </Grid>
      <Grid p={4} container justifyContent="center">
        <Pagination
          count={noOfPages}
          page={page}
          onChange={handleChange}
          defaultPage={1}
          color="primary"
          size="large"
          showFirstButton
          showLastButton
        />
      </Grid>
    </>
  );
};

export default TableProducts;
