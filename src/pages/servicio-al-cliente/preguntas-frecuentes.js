import React from "react";
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import WhatsappButton from "@/components/WhatsappButton";
import Link from "next/link";
import {
  Container,
  Divider,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Breadcrumbs,
  Stack,
  Link as MuiLink,
} from "@mui/material";
import Image from "next/image";
import Question from "@/public/questions.svg";
import Routes from "@/constants/routes";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
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

const Questions = () => {
  const breadcrumbs = [
    <Link href={Routes.CUSTOMERSERVICE} key="preguntas frecuentes" passHref>
      <MuiLink underline="hover" color="primary" href="/servicio-al-cliente">
        Servicios
      </MuiLink>
    </Link>,
    <Typography key="Text-preguntas">Preguntas Frecuentes</Typography>,
  ];
  return (
    <>
      <Header title={"Preguntas frecuentes"} />
      <div className={styles.fondo}>
        <Container style={customStyle.Container}>
          <Stack p={1}>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" color="primary" />}
            >
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>

          <Typography p={1} variant="h4" color="primary">
            Preguntas Frecuentes
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

            <Grid item m={1} xs={12} sm={12} md={12}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon color="primary" />}
                  aria-controls="question1-content"
                  id="question1-header"
                >
                  <Typography color="primary" variant="h6">
                    Pregunta 1
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography textAlign={"justify"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item m={1} xs={12} sm={12} md={12}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon color="primary" />}
                  aria-controls="question3-content"
                  id="question3-header"
                >
                  <Typography color="primary" variant="h6">
                    Pregunta 2
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography textAlign={"justify"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item m={1} xs={12} sm={12} md={12}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon color="primary" />}
                  aria-controls="question3-content"
                  id="question3-header"
                >
                  <Typography color="primary" variant="h6">
                    Pregunta 3
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography textAlign={"justify"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Image src={Question} alt="Preguntas" width={350} height={350} />
            </Grid>
          </Grid>

          <Divider />
        </Container>
      </div>
      <WhatsappButton message={"Hola! "} />
    </>
  );
};

export default Questions;
