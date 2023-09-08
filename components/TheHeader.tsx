import Link from "next/link";
import styles from "./TheHeader.module.css";

const TheHeader = () => {
  return (
    <header className={styles.container}>
      <Link href="/" passHref>
        <span className={styles.link}>Home</span>
      </Link>
      <Link href="/blog" passHref>
        <span className={styles.link}>Blog</span>
      </Link>
      <Link href="/about" passHref>
        <span className={styles.link}>About</span>
      </Link>
    </header>
  );
};

export { TheHeader };