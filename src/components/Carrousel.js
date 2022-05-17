import {  Grid } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import styles from "@/styles/Carrousel.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Card1 from "@/public/carrousel1.png";
import Card2 from "@/public/carrousel2.png";
import Card3 from "@/public/carrousel3.png";
import Card4 from "@/public/carrousel4.png";
import Card5 from "@/public/carrousel5.png";

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
  {
    id: "5",
    src: Card5,
    info: "Cocina",
  },
];

const Carrousel = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="stretch"
      >
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className={styles.swiper}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {ImagesList.map((item) => (
              <SwiperSlide key={item.info}>
                <Image src={item.src} />
              </SwiperSlide>
            ))}
          </Grid>
        </Swiper>
      </Grid>
    </>
  );
};

export default Carrousel;
