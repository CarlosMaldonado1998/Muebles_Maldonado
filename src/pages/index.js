import Head from "next/head";
import styles from "../styles/Home.module.css";
import NextLink from "next/link";
import Link from "@mui/material/Link";
import Navigation from "@/components/Navigation";
import WhatsappButton from "@/components/WhatsappButton";

import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Carrousel from "@/components/Carrousel";

export default function Home() {
  return (
    <>
      <Carrousel />
      <div className={styles.fondo}>
        <Header title={"Muebles Maldonado"} />

        <Contact />
        <WhatsappButton message={"Mensaje"} />
      </div>
    </>
  );
}
