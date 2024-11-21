import styles from "./css/Footer.module.css";

const year = new Date().getFullYear();

export const Footer = () => {
  return <div className={styles.wrapper}>Yuriy Pochynok - {year}</div>;
};
