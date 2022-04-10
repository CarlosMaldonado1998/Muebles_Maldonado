import Head from "next/head";
import styles from "../styles/Home.module.css";
import NextLink from "next/link";
import Link from "@mui/material/Link";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Muebles Maldonado</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a> integrated with{" "}
          <a href="https://mui.com/">Material-UI!</a>
        </h1>
        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <NextLink href="/acerca-de" passHref>
          <Link variant="body2">Your Link</Link>
        </NextLink>
      </main>
    </div>
  );
}
