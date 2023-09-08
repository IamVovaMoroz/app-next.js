import Link from "next/link";
import styles from "./TheHeader.module.css"; // Импортируем стили

const TheHeader = () => {
    return (
        <header className={styles.container}> {/* Применяем стили */}
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
        </header>
    );
};

export { TheHeader };