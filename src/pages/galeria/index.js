import React from 'react';
import styles from "@/styles/Home.module.css";
import WhatsappButton from "@/components/WhatsappButton";
import Head from "next/head";
import Header from '@/components/Header';

const Gallery = () => {
  return (
    <>
      <div className={styles.container}>
        <Header title={"Galería de entregados"}/>
        <main className={styles.main}>
          <h1 className={styles.title}>Muebles Maldonado</h1>
          <p className={styles.description}>Productos entregados</p>
        </main>
        <WhatsappButton message={"Hola! "} />
      </div>
    </>
  );
}

export default Gallery