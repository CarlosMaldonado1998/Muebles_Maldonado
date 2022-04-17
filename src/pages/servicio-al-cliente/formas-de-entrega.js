import React from 'react';
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Link from 'next/link';
import Routes from '@/constants/routes';
import WhatsappButton from "@/components/WhatsappButton";
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
import DeliveryInfo from "@/public/delivery.svg";
import Delivered from "@/public/delivered.svg";
import Factory from "@/public/factory.svg";
import Tramaco from '@/public/Tramaco.png';
import Encomienda from "@/public/encomienda.png";
import Servientrega from "@/public/CentrosS.png";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Header from '@/components/Header';

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

const DeliveryMethod = () => {
  const breadcrumbs = [
    <Link href={Routes.CUSTOMERSERVICE} key="formas de entrega" passHref>
      <MuiLink underline="hover" color="secondary" href="/servicio-al-cliente">
        Servicios
      </MuiLink>
    </Link>,
    <Typography key="Text-formas">Formas de entrega</Typography>,
  ];
  return (
    <>
      <Header title={"Formas de entrega"}/>
      <div className={styles.fondo}>
        <Container style={customStyle.Container}>
          <Stack p={1}>
            <Breadcrumbs
              separator={
                <NavigateNextIcon fontSize="small" color="secondary" />
              }
            >
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>

          <Typography p={1} variant="h4" color="secondary">
            Formas de Entrega en Quito y Provincias
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={12} md={12}>
              <Typography textAlign={"justify"}>
                Los precios indicados en Muebles Maldonado incluyen gastos de
                Entrega en la Ciudad de Quito para entregas fuera del cantón se
                cobrara un proporcional según el pedido ( Para Provincia los
                costos son a cargo del comprador) y Muebles Maldonado se reserva
                el derecho a modificar sus precios en cualquier momento. No
                obstante, una vez confirmado el pedido, aunque se produzca
                alguna variación posterior de los mismos, se ingresaran los
                precios existentes durante la confirmación del pedido.
                <br />
                <b>Nota :</b>
                Antes de hacer tu pedido, comprueba que los productos podrán ser
                entregados sin dificultad. Ten cuidado y verifica las medidas de
                tus puertas, escaleras, descansillos, pasillos y ascensor.
              </Typography>
              <Typography>A continuación los pasos:</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Paper elevation={16} style={customStyle.Paper}>
                <Chip label="1" color="secondary" />
                <Typography>
                  Cuando hagas tu pedido dá toda la información necesaria para
                  el buen desarrollo de la entrega: dirección, teléfonos. Da uno
                  o varios números de teléfono en los que estés localizable
                  durante el día, para la concertación de la entrega. Aprovecha
                  esta llamada para señalarle a nuestro transportista cualquier
                  dificultad de acceso o de paso que los repartidores podrían
                  encontrar.
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
            <Grid item xs={12} sm={12} md={6}>
              <Image src={Factory} alt="Primer paso" width={250} height={200} />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Paper elevation={16} style={customStyle.Paper}>
                <Chip label="2" color="secondary" />
                <Typography>
                  Recuerda Muebles Maldonado Fabrica Muebles Bajo Pedido y una
                  vez recibido la confirmación de su pago procedemos a elaborar
                  el mueble y entregamos en el plazo máximo de señalado a partir
                  del pedido. En Quito se entrega con instalación totalmente
                  gratis.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Paper elevation={16} style={customStyle.Paper}>
                <Chip label="3" color="secondary" />
                <Typography>
                  Nuestro transportista se pondrá en contacto para planificar la
                  entrega. La entrega se efectuará de Lunes a Sábado : De 8:00
                  am a 14:00 pm , De 15:00 pm a 17:00 pm se realizan los envíos
                  a provincia. En caso de que por una eventualidad no se pueda
                  recibir el producto una vez coordinado el día y hora por favor
                  notificar al Transportista con 24 horas de anticipación antes
                  de la entrega. Aplica para la ciudad de Quito. Entregamos el
                  Producto directamente e Instalamos sin ningún costo adicional.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Image
                src={Delivered}
                alt="Primer paso"
                width={250}
                height={250}
              />
            </Grid>
          </Grid>

          <Divider />
          <Typography p={3} variant="h4" color="secondary">
            Envíos a Provincia
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={12} md={12}>
              <Paper elevation={4} style={customStyle.Paper}>
                <Typography mb={1} textAlign={"justify"}>
                  Para envíos a provincia enviamos por Servientrega y Tramaco, o
                  transportes de encomiendas para muebles pequeños, tiempo
                  estimado de llegada 24 horas después del despacho en lugares
                  principales. El costo adicional por el envió corre a cargo del
                  Comprador ya que solo prestamos Instalacion Gratuita en Quito
                  y se notificara antes de la compra.
                </Typography>
                <Divider />
                <Typography mt={1} textAlign={"left"}>
                  Importante para envíos se necesitan los siguientes datos:
                  <br />
                  Nombres y Apellidos completos <br />
                  Numero de cédula <br />
                  Numero convencional o celular y dirección.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Grid ml={2}></Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Image
                src={Servientrega}
                alt="Servientrega"
                width={250}
                height={200}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Image src={Tramaco} alt="Tramaco" width={300} height={150} />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Image
                src={Encomienda}
                alt="Camión de encomienda"
                width={250}
                height={200}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
      <WhatsappButton message={"Hola! "} />
    </>
  );
}

export default DeliveryMethod