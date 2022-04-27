import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Container,
  ButtonBase,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import styled from "@emotion/styled";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Information = [
  {
    text: "Condado Alto  Sector Pisulli  Calle  Flavio Alfaro N81-156 y Alcabala.",
    icon: <LocationOnIcon color="whiteT" />,
    info: "Quito - Ecuador",
  },
  {
    text: "muebleriamaldonadoec@gmail.com",
    icon: <EmailIcon color="whiteT" />,
    info: "Correo",
  },
  {
    text: "0959504842",
    icon: <LocalPhoneIcon color="whiteT" />,
    info: "Teléfono",
  },
];

const Links = [
  {
    text: "https://www.facebook.com/MueblesMaldonad",
    icon: <FacebookIcon color="whiteT" />,
    info: "Facebook",
  },
  {
    text: "https://www.instagram.com/muebles_maldonad/",
    icon: <InstagramIcon color="whiteT" />,
    info: "Instagram",
  },
  {
    text: "https://api.whatsapp.com/send?phone=593959504842&text=Hola!%20%0AGracias%20por%20comunicarte%20con%20Muebles%20Maldonado%2C%20pronto%20un%20asesor%20canalizara%20%20t%C3%BA%20solicitud.%20",
    icon: <WhatsAppIcon color="whiteT" />,
    info: "Whatsapp",
  },
  {
    text: "https://www.pinterest.com/mueblesmaldonadoec",
    icon: <PinterestIcon color="whiteT" />,
    info: "Pinterest",
  },
];
const customStyle = {
  Paper: {
    backgroundColor: "#9a5723",
    margin: "10px",
    padding: "20px",
  },
};

const IconImage = styled(ButtonBase)(({ theme }) => ({
  margin: "10px",
  "&:hover ": {
    transform: "scale(1,2)",
  },
}));

const ContactInfo = () => {
  return (
    <>
      <Paper style={customStyle.Paper} elevation={8}>
        <Grid>
          <Typography p={2} variant={"h5"} color="white">
            Información de contacto
          </Typography>
          <Typography variant={"body2"} textAlign={"justify"}>
            {
              "Síguenos en nuestras Redes Sociales y entérate de todas las novedades que tenemos para ti."
            }
          </Typography>
        </Grid>
        <Grid>
          <List
            sx={{
              width: "100%",
              margin: {
                xs: "-5px",
                md: "10px",
              },
            }}
          >
            {Information.map((item) => (
              <ListItem
                sx={{ margin: { xs: "0px" } }}
                key={item.info}
                alignItems="flex-start"
              >
                <ListItemAvatar
                  sx={{
                    width: {
                      xs: "5px",
                    },
                    minWidth: { xs: "30px", md: "60px" },
                  }}
                >
                  {item.icon}
                </ListItemAvatar>
                <ListItemText
                  primaryTypographyProps={{
                    color: "white",
                  }}
                  primary={item.text}
                  secondary={item.info}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid>
          <Typography>{"Estamos en:"}</Typography>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {Links.map((item) => (
              <IconImage key={item.info} href={item.text} target="_blank">
                {item.icon}
              </IconImage>
            ))}
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default ContactInfo;
