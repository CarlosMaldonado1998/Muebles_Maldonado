import React from "react";
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import WhatsappButton from "@/components/WhatsappButton";
import Routes from "@/constants/routes";
import Link from "next/link";
import {
  Container,
  Divider,
  Typography,
  Link as MuiLink,
  Grid,
  Paper,
  Chip,
} from "@mui/material";
import Image from "next/image";
import DeliveryInfo from "@/public/personalization.svg";
import Service from "@/public/services.svg";
import Header from "@/components/Header";

const customStyle = {
  Container: {
    textAlign: "center",
  },
  Paper: {
    backgroundColor: "rgba(255,255,255)",
    margin: "10px",
    padding: "20px",
  },
};

const index = () => {
  return (
    <>
      <Header title={"Servicios"}/>
      <div className={styles.fondo}>
        <Container style={customStyle.Container}>
          <Typography p={3} variant="h4" color="primary">
            Servicios
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={12} md={12}>
              <Typography textAlign={"justify"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Paper elevation={16} style={customStyle.Paper}>
                <Chip
                  label="Fabricación de muebles a medida"
                  color="primary"
                />
                <Typography textAlign={"justify"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Image
                src={DeliveryInfo}
                alt="Primer paso"
                width={200}
                height={200}
              />
            </Grid>
          </Grid>

          <Divider />
          <Typography p={3} variant="h4" color="primary">
            Servicio al cliente
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={12} md={12}>
              <Paper elevation={4} style={customStyle.Paper}>
                <Link href={Routes.STEPSTOBUY} passHref>
                  <MuiLink underline="hover" color="primary">
                    <Typography m={1} variant={"h6"} textAlign={"justify"}>
                      Pasos para Comprar
                    </Typography>
                  </MuiLink>
                </Link>
                <Divider />
                <Link href={Routes.DELIVERYMETHOD} passHref>
                  <MuiLink underline="hover" color="primary">
                    <Typography m={1} variant={"h6"} textAlign={"justify"}>
                      Formas de Entrega
                    </Typography>
                  </MuiLink>
                </Link>
                <Divider />
                <Link href={Routes.QUESTIONS} passHref>
                  <MuiLink underline="hover" color="primary">
                    <Typography m={1} variant={"h6"} textAlign={"justify"}>
                      Preguntas Frecuentes
                    </Typography>
                  </MuiLink>
                </Link>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Image src={Service} alt="Primer paso" width={200} height={200} />
            </Grid>
          </Grid>
        </Container>
      </div>
      <WhatsappButton message={"Hola! "} />
    </>
  );
};

export default index;
