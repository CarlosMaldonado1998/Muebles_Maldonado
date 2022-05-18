import React from "react";
import { SWRConfig } from "swr";
import { fetcher } from "@/lib/utils";
import useSWR from "swr";
import { Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import imageUrl from "@/constants/imageUrl";
import CardProduct from "./CardProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import styles from "@/styles/Carrousel.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Loading from "../Loading";

const MostPopular = () => {
  const { data, error } = useSWR("/products/latest", fetcher);
  if (error) return "An error has occurred.";
  if (!data) return <Loading />;

  return (
    <div className={styles.fondo}>
      <Container>
        <Grid>
          <Typography py={2} variant={"h4"} color="primary" textAlign={"left"}>
            Lo más vendido
          </Typography>
        </Grid>
        <Grid
          p={2}
          sx={{
            display: "flex", 
          }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 60,
              },
            }}
            modules={[Pagination, Navigation]}
            className={styles.swiper}
          >
            <Grid container>
              {data
                ? data.data.map((product) => (
                    <SwiperSlide key={product.name} className={styles.Card}>
                      <CardProduct infoProduct={product} />
                    </SwiperSlide>
                  ))
                : null}
            </Grid>
          </Swiper>
        </Grid>
      </Container>
    </div>
  );
};

export default MostPopular;
