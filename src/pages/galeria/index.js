import React, { useState } from "react";
import styles from "@/styles/Productos.module.css";
import WhatsappButton from "@/components/WhatsappButton";
import Header from "@/components/Header";
import { SWRConfig } from "swr";
import { fetcher } from "@/lib/utils";
import useSWR from "swr";
import imageUrl from "@/constants/imageUrl";
import {
  ButtonBase,
  Container,
  Grid,
  Typography,
  Dialog,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import Image from "next/image";
import Contact from "@/public/contact.svg";
import ContactForm from "@/components/ContactForm";

function Gallery() {
  // `data` will always be available as it's in `fallback`.
  const { data } = useSWR("/deliveries", fetcher);
  const [open, setOpen] = useState(false);
  const [selectedDelivery, setSelectedDelivery] = useState({});

  const handleClickOpen = (productInfo) => {
    setSelectedDelivery({ ...productInfo });
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Header title={"Proyectos entregados"} />
      <Container>
        <Grid>
          <Typography
            py={4}
            variant={"h4"}
            color="primary"
            textAlign={"center"}
          >
            Proyectos entregados
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {data.data.map((item) => (
            <Grid
              p={1}
              item
              xs={12}
              sm={6}
              lg={4}
              key={`item-${item.id}-${item.title}`}
              textAlign="center"
            >
              <ButtonBase onClick={() => handleClickOpen(item)}>
                <img
                  src={imageUrl(item.url)}
                  alt={item.title}
                  className={styles.delivery}
                  loading="lazy"
                />
              </ButtonBase>
            </Grid>
          ))}
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={6} textAlign="center">
            <Image src={Contact} width={350} height={350} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography py={2} variant="h4" color="secondary">
              Solicita tu proforma
            </Typography>
            <ContactForm />
          </Grid>
        </Grid>
      </Container>
      <WhatsappButton message={"Hola! "} />
      <SimpleDialog open={open} data={selectedDelivery} onClose={handleClose} />
    </>
  );
}

function SimpleDialog(props) {
  const { onClose, data, open } = props;
  const handleClose = () => {
    onClose();
  };
  return (
    <Dialog onClose={handleClose} open={open}>
      <ImageListItem sx={{ background: "#502a17" }}>
        <img src={imageUrl(data.url)} className={styles.deliveryShow} />
        <ImageListItemBar
          title={<Typography variant="h6">{data.title}</Typography>}
          subtitle={<Typography variant="body2" >{data.description}</Typography>}
        />
      </ImageListItem>
    </Dialog>
  );
}

export default function Page({ fallback }) {
  // SWR hooks inside the `SWRConfig` boundary will use those values.
  return (
    <SWRConfig value={{ fallback }}>
      <Gallery />
    </SWRConfig>
  );
}

export async function getStaticProps() {
  // `getStaticProps` is executed on the server side.
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/deliveries`);
  const data = await res.json();
  return {
    props: {
      fallback: {
        "/deliveries": data,
      },
    },
  };
}
