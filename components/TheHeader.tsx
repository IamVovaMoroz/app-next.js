// import Link from "next/link";
// import styles from "./TheHeader.module.css";
// import Image from "next/image"; // Импортируем компонент Image
// import { Navigation } from "./Navigation";

// const navItems = [
//     {label: "Home", href: "/"},
//     {label: "Posts", href: "/posts"},
//     {label: "About", href: "/about"},
//     {label: "Catalog", href: "/catalog"}]



// const TheHeader = () => {
//   return (
//     <header className={styles.container}>
//     <Navigation navLinks={navItems}/>

//       <Link href="/" passHref>
//         <span className={styles.link}>
//           {/* Вставляем логотип с использованием компонента Image */}
//           <Image src="/cat3.jpg" width={60} height={60} alt="logo" />
//           Home
//         </span>
//       </Link>
//       <Link href="/blog" passHref>
//         <span className={styles.link}>Blog</span>
//       </Link>
//       <Link href="/about" passHref>
//         <span className={styles.link}>About</span>
//       </Link>
//       <Link href="/catalog" passHref>
//         <span className={styles.link}>Catalog</span>
//       </Link>
//     </header>
//   );
// };
// TheHeader.tsx

import Link from "next/link";
import styles from "./TheHeader.module.css";
import Image from "next/image"; // Импортируем компонент Image

import { Navigation } from "./Navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

const TheHeader = () => {
  return (
    <header className={styles.header}>
      <Image src="/cat3.jpg" width={60} height={60} alt="logo" className={styles.logo} />
      <Navigation navLinks={navItems} />
      
    </header>
  );
};

export { TheHeader };
