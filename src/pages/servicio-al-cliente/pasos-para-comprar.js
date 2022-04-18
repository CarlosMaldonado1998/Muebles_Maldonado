import React from "react";
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import WhatsappButton from "@/components/WhatsappButton";
import Link from "next/link";
import Routes from "@/constants/routes";
import {
  Container,
  Divider,
  Typography,
  Grid,
  Paper,
  Link as MuiLink,
  Chip,
  Breadcrumbs,
  Stack,
} from "@mui/material";
import Image from "next/image";
import Choice from "@/public/choice.svg";
import transferencia from "@/public/transfer.svg";
import Bank from "@/public/bancoPichincha.png";
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

const stepsToBuy = () => {
  const breadcrumbs = [
    <Link href={Routes.CUSTOMERSERVICE} key="pasos para comprar" passHref>
      <MuiLink underline="hover" color="primary" href="/servicio-al-cliente">
        Servicios
      </MuiLink>
    </Link>,
    <Typography key="Text-pasos">Pasos para comprar</Typography>,
  ];

  return (
    <>
      <Header title={"Pasos para comprar"} />
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
            Pasos para comprar
          </Typography>

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={12} md={12}>
              <Typography p={1} variant="h6" color="primary" textAlign={"left"}>
                ¿Cómo comprar un Producto en Muebles Maldonado ?
              </Typography>
              <Typography textAlign={"justify"}>
                La fabricación de los productos son sujetos a revisión si el
                cliente lo desea mediante visita técnica para mostrar materiales
                y colores disponibles a la fecha. Asegurando una compra exacta
                en calidades y tonalidades requeridas garantizando las
                necesidades del cliente y credibilidad por parte de nosotros
                para realizar las respectivas ordenes de trabajo.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Typography p={1} variant="h6" color="primary" textAlign={"left"}>
                ¿Porque comprar en Muebles Maldonado?
              </Typography>
              <Typography textAlign={"justify"}>
                Una de las principales prioridades a la hora de escoger un
                productos es que sea de buena calidad , nosotros pensamos de
                esta manera y trabajamos con los mejores materiales disponibles
                en el país. Unos de nuestros proveedores de Insumos es Novopan
                del Ecuador empresa muy conocida en el mercado por ofrecer
                materiales de primera calidad entre otros mas. Nosotros no
                trabajamos con materiales de mala calidad pues realizamos visita
                previa totalmente gratis para la elección de los colores y
                material requerido de nuestros modelos y prestamos servicio a
                domicilio en todas nuestros productos.
              </Typography>
            </Grid>
          </Grid>

          <Divider />
          <Typography p={3} variant="h5" color="primary">
            Selecciona un Producto y Procede a Cancelar en cualquiera de las dos
            modalidades que ofrecemos.
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={12} md={6}>
              <Paper elevation={16} style={customStyle.Paper}>
                <Chip label="1.- Selecciona un Producto " color="primary" />
                <Typography textAlign={"left"}>
                  Una vez seleccionado el producto lo puede cancelar en dos
                  modalidades <br />
                  1.- EL pago por el 60 % del Valor total de su compra y lo
                  cancela contra entrega ( Aplica para compras superiores a 200
                  dolares) para compras inferiores a $ 200 dolares tendrá que
                  cancelar el total para realizar su pedido
                  <br />
                  2.- El pago puede realizarlo por el total de su compra.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Image src={Choice} alt="Elección" width={200} height={200} />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Image
                src={transferencia}
                alt="Transferencia"
                width={250}
                height={200}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Paper elevation={16} style={customStyle.Paper}>
                <Chip
                  label="2.-  Forma de Pago  por Transferencia Bancaria o Deposito "
                  color="primary"
                />
                <Grid m={1}>
                  <Image
                    src={Bank}
                    alt="Banco Pichincha"
                    width={70}
                    height={15}
                  />
                </Grid>

                <Typography textAlign={"left"}>
                  Antes de Realizar tu pago comunícate si tienes alguna duda en
                  tu requerimiento para resolver tus dudas . El Pago es mediante
                  transferencia Bancaria ( Solicitar Numero de Cuenta 0959504842
                  o mediante la Visita Técnica en Efectivo o en Cheque . Una vez
                  se haya hecho efectiva la transferencia enviar el comprobante
                  de pago a la siguiente dirección :
                  muebleriamaldonadoec@gmail.com y verificaremos lo más pronto
                  posible , luego nos comunicaremos con su persona y enviaremos
                  un correo para coordinar el lugar de entrega en Quito después
                  del tiempo correspondiente a la elaboración del mueble .
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
      <WhatsappButton message={"Hola! "} />
    </>
  );
};

export default stepsToBuy;
