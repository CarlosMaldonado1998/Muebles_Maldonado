import React from "react";
import styles from "@/styles/Home.module.css";
import Routes from "@/constants/routes";
import {
  ButtonBase,
  Grid,
  Typography,
  Link as MuiLink,
  Container,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Link from "next/link";
import styled from "@emotion/styled";
import LOGO from '../../public/Recurso1.png';
import Image from "next/image";

const AboutUs = [
  {
    text: "Nosotros",
    to: Routes.ABOUT,
  },
  {
    text: "Servicios",
    to: Routes.SERVICES,
  },
  {
    text: "Contáctanos",
    to: Routes.CONTACT,
  },
];

const Products = [
  {
    text: "Catálogo",
    to: Routes.PRODUCTS,
  },
  {
    text: "Envíos",
    to: Routes.SHIPMENT,
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
            justifyContent="center"
            alignItems="flex-start"
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Grid container justifyContent="center">
                <Image src={LOGO} width={140} height={110} />
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
              <Grid container justifyContent="center">
                <Typography color="brown" variant="h6">
                  Acerca de
                </Typography>
              </Grid>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 8 }}
              >
                {AboutUs.map((index) => (
                   <Grid item xs={4} sm={8} md={12} key={`about-${index.text}`}>
                    <Link href={index.to} passHref>
                      <MuiLink underline="hover" color="white">
                        {index.text}
                      </MuiLink>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
              <Grid container justifyContent="center">
                <Typography color="brown" variant="h6">
                  Productos
                </Typography>
              </Grid>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {Products.map((index) => (
                  <Grid item xs={4} sm={8} md={12} key={`products-${index.text}`}>
                    <Link href={index.to} passHref>
                      <MuiLink underline="hover" color="white">
                        {index.text}
                      </MuiLink>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
              <Grid container justifyContent="center">
                <Typography color="brown" variant="h6">
                  Redes Sociales
                </Typography>
              </Grid>

              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
              >
                <IconImage
                  href="https://www.facebook.com/MueblesMaldonad"
                  target="_blank"
                >
                  <FacebookIcon color="blue" />
                </IconImage>
                <IconImage
                  href="https://www.instagram.com/muebles_maldonad/"
                  target="_blank"
                >
                  <InstagramIcon color="purple" />
                </IconImage>
                <IconImage
                  href="https://api.whatsapp.com/send?phone=593959504842&text=Hola!%20%0AGracias%20por%20comunicarte%20con%20Muebles%20Maldonado%2C%20pronto%20un%20asesor%20canalizara%20%20t%C3%BA%20solicitud.%20"
                  target="_blank"
                >
                  <WhatsAppIcon color="green" />
                </IconImage>
                <IconImage
                  href="https://www.pinterest.com/mueblesmaldonadoec"
                  target="_blank"
                >
                  <PinterestIcon color="red" />
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
