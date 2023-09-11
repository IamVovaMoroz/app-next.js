import Link from "next/link";
import styles from "./TheHeader.module.css";
import Image from "next/image"; // Импортируем компонент Image

const TheHeader = () => {
  return (
    <header className={styles.container}>
      <Link href="/" passHref>
        <span className={styles.link}>
          {/* Вставляем логотип с использованием компонента Image */}
          <Image src="/cat3.jpg" width={60} height={60} alt="logo" />
          Home
        </span>
      </Link>
      <Link href="/blog" passHref>
        <span className={styles.link}>Blog</span>
      </Link>
      <Link href="/about" passHref>
        <span className={styles.link}>About</span>
      </Link>
      <Link href="/catalog" passHref>
        <span className={styles.link}>Catalog</span>
      </Link>
    </header>
  );
};

export { TheHeader };
