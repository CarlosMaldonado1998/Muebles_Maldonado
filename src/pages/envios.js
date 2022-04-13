import { Container } from "@mui/material";
import React from "react";
import styles from '@/styles/Home.module.css';
import Head from 'next/head';
import WhatsappButton from '@/components/WhatsappButton';
const Shipment = () => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Muebles Maldonado-Envios</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>Muebles Maldonado</h1>
          <p className={styles.description}>Descripción proceso de envios</p>
        </main>
        <WhatsappButton message={"Hola! "} />
      </div>
    </>
  );
};

export default Shipment;
