import React from 'react'
import styles from "@/styles/Home.module.css";
import Header from '@/components/Header';
import WhatsappButton from "@/components/WhatsappButton";
const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <Header title={"Contáctanos"} />
        <main className={styles.main}>
          <h1 className={styles.title}>Muebles Maldonado</h1>
          <p className={styles.description}>Información de contacto</p>
        </main>
        <WhatsappButton message={"Hola! "} />
      </div>
    </>
  );
}

export default Contact