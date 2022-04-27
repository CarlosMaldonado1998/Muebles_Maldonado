import React from "react";
import { Grid, Typography, Container, Divider, Paper } from "@mui/material";

import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";

const customStyle = {
  Container: {
    textAlign: "center",
    minHeight: "90vh",
    display: "flex",
  },
  Paper: {
    backgroundColor: "rgba(255,255,255)",
    margin: "10px",
    padding: "10px",
  },
};

const Contact = () => {
  return (
    <>
      <Container style={customStyle.Container} id="contacto">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid m={0} item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography variant={"h4"} color="primary" textAlign={"center"}>
              Contáctanos
            </Typography>
          
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={11} xl={11}>
            <Paper style={customStyle.Paper} elevation={16}>
              <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
              >
                <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                  <ContactInfo />
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
                  <Grid>
                    <Typography p={2} variant="h5" color="primary">
                      ¿Cómo podemos ayudarte?
                    </Typography>
                    <Typography p={1} variant={"body2"} textAlign={"justify"}>
                      {
                        "Escríbenos un mensaje y nos estaremos comunicando contigo a la brevedad."
                      }
                    </Typography>
                  </Grid>
                  <ContactForm />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Contact;
