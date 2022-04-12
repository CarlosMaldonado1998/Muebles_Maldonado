import Head from "next/head";
import styles from "../styles/Home.module.css";
import NextLink from "next/link";
import Link from "@mui/material/Link";
import Navigation from "@/components/Navigation";
export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Muebles Maldonado</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Muebles Maldonado 
          </h1>
          <p className={styles.description}>
           Carrousel de imagenes 
          </p>
        </main>
      </div>
    </>
  );
}
