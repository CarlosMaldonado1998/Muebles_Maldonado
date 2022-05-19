import React from "react";
import { Container, Grid, Typography, Button } from "@mui/material";
import Link from "next/link";
import styles from "@/styles/Carrousel.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, EffectCards, Pagination } from "swiper";

import Card1 from "@/public/proyectos1.jpg";
import Card2 from "@/public/proyectos1.jpg";
import Card3 from "@/public/proyectos1.jpg";
import Card4 from "@/public/proyectos1.jpg";

import Image from "next/image";
const ImagesList = [
  {
    id: "1",
    src: Card1,
    info: "Closets",
  },
  {
    id: "2",
    src: Card2,
    info: "Camas",
  },
  {
    id: "3",
    src: Card3,
    info: "MuebleTv",
  },
  {
    id: "4",
    src: Card4,
    info: "MuebleOficina",
  },
];
const ProyectsDone = () => {
  return (
    <>
      <Container>
        <Grid
          p={1}
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={8} md={8}>
            <Typography
              py={2}
              variant={"h4"}
              color="primary"
              textAlign={"left"}
            >
              Proyectos realizados
            </Typography>
          </Grid>
          <Grid item xs={4} md={4} textAlign="right">
            <Link href="/galeria" passHref>
              <Button color="secondary">Ver más</Button>
            </Link>
          </Grid>
        </Grid>
        <Grid p={1} container>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination]}
            className={styles.swiper}
          >
            {ImagesList.map((item) => (
              <SwiperSlide className={styles.Card} key={item.info}>
                <Image src={item.src} alt={item.info} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Container>
    </>
  );
};

export default ProyectsDone;
