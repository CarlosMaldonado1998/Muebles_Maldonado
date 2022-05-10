import React from 'react'
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import WhatsappButton from "@/components/WhatsappButton";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import Header from '@/components/Header';
export default function Home(){

  // const { data, error } = useSWR("/products/room/1", fetcher);

  // if (error) return <div>failed to load</div>;
  // if (!data) return <div>loading...</div>;

  // console.log(data);

  return (
    <>
      <div className={styles.container}>
        <Header title={"Productos"}/>
        <main className={styles.main}>
          <h1 className={styles.title}>Muebles Maldonado</h1>
          <p className={styles.description}>Listado de productos</p>
        </main>
        <WhatsappButton message={"Hola! "} />
      </div>
    </>
  );
}

