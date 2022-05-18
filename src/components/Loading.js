import React from "react";
import styles from "../styles/Loading.module.css";

const Loading = () => (
  <div className={styles.middle}>
    <div className={`${styles.bar} ${styles.bar1}`} />
    <div className={`${styles.bar} ${styles.bar2}`} />
    <div className={`${styles.bar} ${styles.bar3}`} />
    <div className={`${styles.bar} ${styles.bar4}`} />
    <div className={`${styles.bar} ${styles.bar5}`} />
    <div className={`${styles.bar} ${styles.bar6}`} />
    <div className={`${styles.bar} ${styles.bar7}`} />
    <div className={`${styles.bar} ${styles.bar8}`} />
  </div>
);

export default Loading;