import React from "react";
import { Grid, Typography, Divider } from "@mui/material";
import Customize from "@/public/customize.jpg";
import ContactForm from "../ContactForm";
import Image from "next/image";
import PaidIcon from "@mui/icons-material/Paid";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
const Message1 =
  "Estos muebles se pueden realizar en medidas especiales. Para solicitar presupuesto envíen un correo electrónico a ";
const Message2 =
  " con la medida que requiere y la referencia. Le enviaremos presupuesto en el menor tiempo posible. Debido al proceso de fabricación de este artículo se realizará siempre de acuerdo con las especificaciones proporcionadas por el cliente, el mueble se realiza en colores disponibles a la fecha.";

const MEs = `mensaje ${(<strong>mensaje</strong>)}`;
const Info = [
  {
    text: "Tiempo de Entrega",
    description: "El tiempo de entrega varia según el tipo de producto",
    icon: <LocalShippingIcon sx={{ fontSize: 50 }} color="primary" />,
  },
  {
    text: "Formas de Pago",
    description: "*Pago en efectivo o Transferencia Electrónica",
    icon: <AttachMoneyIcon sx={{ fontSize: 50 }} color="primary" />,
  },
  {
    text: "Compra por Whatsapp",
    description: "0959504842",
    icon: <WhatsAppIcon sx={{ fontSize: 50 }} color="primary" />,
  },
];
const InfoAdditional = () => {
  return (
    <>
      <Divider />
      <Grid
        py={4}
        container
        direction="row"
        justifyContent="center"
        alignItems="start"
      >
        {Info.map((item) => (
          <Grid item xs={12} md={4} p={3} key={`info-${item.text}`}>
            <Grid container alignItems="center">
              <Grid p={2} item xs={4} align="right">
                {item.icon}
              </Grid>
              <Grid item xs={8}>
                <Typography color="primary" variant="h6">
                  {item.text}
                </Typography>
                <Typography>{item.description}</Typography>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Divider />
          <Grid py={ 3}container>
        <Grid item xs={12} sm={6}>
          <Typography py={2} variant="h4" color="secondary">
            Información Importante
          </Typography>
          <Typography pr={5} py={2} align="justify">
            {Message1} <strong>muebleriamaldonadoec@gmail.com</strong>{" "}
            {Message2}
          </Typography>
          <Grid pr={5} align="center">
            <Image src={Customize} width={400} height={150} />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography py={2} variant="h4" color="secondary">
            Consultas y pedidos
          </Typography>
          <ContactForm />
        </Grid>
      </Grid>
    </>
  );
};

export default InfoAdditional;
