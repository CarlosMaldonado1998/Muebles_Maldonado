import Head from "next/head";
import styles from "../styles/Home.module.css";
import NextLink from "next/link";
import Link from "@mui/material/Link";
import Navigation from "@/components/Navigation";
import WhatsappButton from "@/components/WhatsappButton";

import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Header title={"Muebles Maldonado"}/>
        <main className={styles.main}>
          <h1 className={styles.title}>Muebles Maldonado</h1>
          <p className={styles.description}>Carrousel de imagenes</p>
          <WhatsappButton message={"Hola! "} />
        </main>
      </div>
    </>
  );
}
