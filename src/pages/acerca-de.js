import React from 'react';
import NextLink from 'next/link';
import Button from '@mui/material/Button';
import styles from '@/styles/Home.module.css';
import WhatsappButton from "@/components/WhatsappButton";
import Head from 'next/head';
const About = () => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Muebles Maldonado-Acerca de</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>Muebles Maldonado</h1>
          <p className={styles.description}>Información del negocio</p>
        </main>
        <WhatsappButton message={"Hola! "} />
      </div>
    </>
  );
}

export default About