import React, { useState } from "react";
import { SWRConfig } from "swr";
import { fetcher } from "@/lib/utils";
import WhatsappButton from "@/components/WhatsappButton";
import Header from "@/components/Header";
import useSWR from "swr";
import {
  Container,
  Grid,
  Typography,
} from "@mui/material";

import TableProducts from "@/components/Products/TableProducts";
import MenuCategories from "@/components/MenuCategories";

function Categories() {
  // `data` will always be available as it's in `fallback`.
  const { data } = useSWR("/products/all", fetcher);
  const [filterCategory, setFilterCategory] = useState("Todos");
  const [dataFilter, setDataFilter] = useState([]);
  const handleFilterCategory = (id) => {
    setFilterCategory(id);
    handleFilterData(id);
  };

  const handleFilterData = (id) => {
    const newData = data.data
      .filter((product) => product.category_id == id)
      .map((product) => product);
    setDataFilter(newData);
  };

  return (
    <>
      <Header title={"Categorías"} />
      <Container sx={{ minHeight: "80vh" }}>
        <Grid>
          <Typography py={2} variant={"h4"} color="primary" textAlign={"left"}>
            Todos los productos
          </Typography>
        </Grid>
        <Grid container>
          <Grid item xs={2} md={2}>
            <MenuCategories onChangeCategory={handleFilterCategory} />
          </Grid>
          <Grid item xs={10} md={10}>
            {filterCategory !== "Todos" ? (
              <TableProducts infoProducts={dataFilter} />
            ) : (
              <TableProducts infoProducts={data.data} />
            )}
          </Grid>
        </Grid>
      </Container>

      <WhatsappButton message={"Hola! "} />
    </>
  );
}

export default function Page({ fallback }) {
  // SWR hooks inside the `SWRConfig` boundary will use those values.
  return (
    <SWRConfig value={{ fallback }}>
      <Categories />
    </SWRConfig>
  );
}

export async function getStaticProps() {
  // `getStaticProps` is executed on the server side.
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/all`
  );
  const data = await res.json();
  return {
    props: {
      fallback: {
        "/products/all": data,
      },
    },
  };
}
