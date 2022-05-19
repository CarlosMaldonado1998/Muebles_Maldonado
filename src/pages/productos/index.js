import React from "react";
import WhatsappButton from "@/components/WhatsappButton";
import Header from "@/components/Header";
import { SWRConfig } from "swr";
import { fetcher } from "@/lib/utils";
import useSWR from "swr";
import {
  Container,
  Grid,
  Typography,
} from "@mui/material";
import CardCategories from "@/components/CardCategories";
import CardAllProductos from "@/components/CardAllProductos";

function Categories() {
  // `data` will always be available as it's in `fallback`.
  const { data } = useSWR("/rooms", fetcher);
  return (
    <>
      <Header title={"Categorías"} />
      <Container sx={{ minHeight: "80vh" }}>
        <Grid>
          <Typography py={ 2} variant={"h4"} color="primary" textAlign={"left"}>
            Explora las Categorías
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {data.data.map((item) => (
            <Grid
              p={2}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={`item-${item.id}-${item.title}`}
            >
              <CardCategories infoCategory={item} />
            </Grid>
          ))}
          <Grid p={2} item xs={12} sm={6} md={4} lg={3} key={`item-Todos`}>
            <CardAllProductos />
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/rooms`);
  const data = await res.json();
  return {
    props: {
      fallback: {
        "/rooms": data,
      },
    },
  };
}
