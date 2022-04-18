import React from "react";
import styles from "@/styles/Home.module.css";
import Routes from "@/constants/routes";
import { ButtonBase, Grid, Typography, Container } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Link from "next/link";
import styled from "@emotion/styled";
import LOGO from "../../public/Recurso1.png";
import Image from "next/image";

const Contact = [
  {
    text: "Condado Alto  Sector Pisulli  Calle  Flavio Alfaro N81-156 y Alcabala.",
  },
  {
    text: "Telf:  0959504842 ",
  },
  {
    text: "Correo: muebleriamaldonadoec@gmail.com",
  },
  {
    text: "Quito - Ecuador",
  },
];

const Services = [
  {
    text: "Fabricación Muebles para el Hogar y Oficina.",
  },
  {
    text: "Relacado de Pisos, Puertas, y muebles en general.",
  },
  {
    text: "Personalización muebles a medida.",
  },
];

const IconImage = styled(ButtonBase)(({ theme }) => ({
  margin: "10px",
  "&:hover ": {
    transform: "scale(1,2)",
  },
}));

const Footer = () => {
  return (
    <div className={styles.footer}>
      <footer>
        <Container>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Link href={Routes.HOME} passHref>
                  <ButtonBase>
                    <Image
                      src={LOGO}
                      alt="Muebles Maldonado"
                      width={170}
                      height={120}
                    />
                  </ButtonBase>
                </Link>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Typography p={1} color="white" variant="h6">
                  CONTACTO
                </Typography>
              </Grid>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 8 }}
              >
                <Grid item xs={4} sm={8} md={12}>
                  {Contact.map((item, index) => {
                    return (
                      <Typography
                        variant="body2"
                        color="white"
                        key={`products-${item.text}`}
                      >
                        {item.text}
                      </Typography>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Typography p={1} color="white" variant="h6">
                  SERVICIOS
                </Typography>
              </Grid>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                <Grid item xs={4} sm={8} md={12}>
                  {Services.map((index) => (
                    <Typography
                      variant="body2"
                      color="white"
                      key={`services-${index.text}`}
                    >
                      {index.text}
                    </Typography>
                  ))}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Typography p={1} color="white" variant="h6">
                  REDES SOCIALES
                </Typography>
              </Grid>

              <Grid container>
                <IconImage
                  href="https://www.facebook.com/MueblesMaldonad"
                  target="_blank"
                >
                  <FacebookIcon color="whiteT" />
                </IconImage>
                <IconImage
                  href="https://www.instagram.com/muebles_maldonad/"
                  target="_blank"
                >
                  <InstagramIcon color="whiteT" />
                </IconImage>
                <IconImage
                  href="https://api.whatsapp.com/send?phone=593959504842&text=Hola!%20%0AGracias%20por%20comunicarte%20con%20Muebles%20Maldonado%2C%20pronto%20un%20asesor%20canalizara%20%20t%C3%BA%20solicitud.%20"
                  target="_blank"
                >
                  <WhatsAppIcon color="whiteT" />
                </IconImage>
                <IconImage
                  href="https://www.pinterest.com/mueblesmaldonadoec"
                  target="_blank"
                >
                  <PinterestIcon color="whiteT" />
                </IconImage>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Grid container justifyContent="center">
                <Link href={Routes.HOME} passHref>
                  <ButtonBase>
                    <Typography color={"white"}>
                      Copyright © Muebles Maldonado {new Date().getFullYear()}
                    </Typography>
                  </ButtonBase>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
