import styles from "./TheFooter.module.css"; // Импортируем стили


const TheFooter = () => {
  return (
    <footer className={styles.container}>
      &copy; 2023 Volodymyr Moroz Company
    </footer>
  )
}

export {TheFooter }
