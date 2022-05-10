import React from "react";
import { SWRConfig } from "swr";
import { fetcher } from "@/lib/utils";
import useSWR from "swr";
import { Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import imageUrl from "@/constants/imageUrl";

export default function Categories() {
  const { data, error } = useSWR("/rooms", fetcher);
  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  console.log("datos", data);

  return (
    <>
      <Container>
        <Grid>
          <Typography
            py={2}
            variant={"h4"}
            color="primary"
            textAlign={"center"}
          >
            CATEGORIAS
          </Typography>
        </Grid>

        {data ? (
          <Grid
            p={2}
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            {data.data.map((categoryItem) => (
              <Grid>
                <Image
                  src={imageUrl(categoryItem.url)}
                  height={100}
                  width={100}
                />
                <Typography textAlign={"center"} color="primary">
                  {categoryItem.name}
                </Typography>
              </Grid>
            ))}
          </Grid>
        ) : null}
      </Container>
    </>
  );
}
