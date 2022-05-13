import Head from "next/head";
import styles from "../styles/Home.module.css";
import NextLink from "next/link";
import Link from "@mui/material/Link";
import Navigation from "@/components/Navigation";
import WhatsappButton from "@/components/WhatsappButton";

import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Carrousel from "@/components/Carrousel";
import Categories from "@/components/Categories";
import WhatsappImage from "@/components/WhatsappImage";
import MostPopular from "@/components/Products/MostPopular";

export default function Home() {
  return (
    <>
      <div className={styles.fondo}>
        <Carrousel />
        <Header title={"Muebles Maldonado"} />
        <Categories />
        <MostPopular />
        <WhatsappImage />
        <Contact />
        <WhatsappButton message={"Mensaje"} />
      </div>
    </>
  );
}
