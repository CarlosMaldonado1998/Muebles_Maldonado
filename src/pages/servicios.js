import React from 'react'
import styles from "@/styles/Home.module.css";
import Head from "next/head";


const Services = () => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Muebles Maldonado-Servicios</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>Muebles Maldonado</h1>
          <p className={styles.description}>Servicios realizados</p>
        </main>
      </div>
    </>
  );
}

export default Services