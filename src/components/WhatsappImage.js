import React from "react";
import { Container, Grid, Paper, ButtonBase } from "@mui/material";
import Image from "next/image";
import Whats from "@/public/whats.png";
import Link from "next/link";
const customStyle = {
  Paper: {
    backgroundColor: "rgba(255,255,255)",
    margin: "10px",
    borderRadius: "15px",
  },
};
const phone = "593959504842";
const WhatsappImage = () => {
  return (
    <Container>
      <Grid
        py={3}
        containerdirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <Link href={`https://api.whatsapp.com/send?phone=${phone}`} passHref>
          <ButtonBase target="_blank">
            <Paper elevation={4} style={customStyle.Paper}>
              <Image src={Whats} />
            </Paper>
          </ButtonBase>
        </Link>
      </Grid>
    </Container>
  );
};

export default WhatsappImage;
