import React from "react";
import { fetcher } from "@/lib/utils";
import useSWR from "swr";
import { Container, Grid, Typography, ButtonBase } from "@mui/material";
import Image from "next/image";
import imageUrl from "@/constants/imageUrl";
import Link from "next/link";
import Loading from "./Loading";

export default function Categories() {
  const { data, error } = useSWR("/rooms", fetcher);
  if (error) return "An error has occurred.";
  if (!data) return <Loading />;

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
            py={4}
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            {data.data.map((categoryItem) => (
              <Grid key={categoryItem.name}>
                <Link href={`/productos/categoria/${categoryItem.id}`} passHref>
                  <ButtonBase>
                    <Grid>
                      <Image
                        src={imageUrl(categoryItem.url)}
                        height={100}
                        width={100}
                        alt={categoryItem.name}
                      />
                      <Typography textAlign={"center"} color="primary">
                        {categoryItem.name}
                      </Typography>
                    </Grid>
                  </ButtonBase>
                </Link>
              </Grid>
            ))}
          </Grid>
        ) : null}
      </Container>
    </>
  );
}
