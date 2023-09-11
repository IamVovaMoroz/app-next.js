// Импортируем необходимые модули и компоненты
"use client"; // Используется для всех клиентских компонентов
import styles from "./Navigation.module.css"; // Импортируем стили
import Link from "next/link";
import { usePathname } from "next/navigation";
import {useRouter} from "next/router"

// Определяем тип для элемента навигации
type NavLink = {
  label: string;
  href: string;
};

// Определяем тип для пропсов компонента
type Props = {
  navLinks: NavLink[];
};

// Определяем компонент навигации
// const Navigation = ({ navLinks }: Props) => {
//   // Используем хук usePathname для получения текущего URL
// //   const pathname = usePathname();

// const {pathname} = useRouter()
// // const navigation = [
// //     {id: 1, title: "Home", patch: "/"},
// //     {id: 2, title: "Posts", patch: "/posts"},
// //     {id: 3, title: "About", patch: "/about"},
// //     {id: 4, title: "Catalog", patch: "/catalog"}

// // ]


//   return (
//     <div className={styles.container}>
//       {/* Создаем навигационное меню с использованием Link */}
//       <nav className={styles.nav}>
//         {navLinks.map((link) => (
            
//           <Link key={link.href} href={link.href}>
//             {/* Добавляем активное состояние для текущего URL*/}
//             <a className={link.href === pathname ? styles.activeLink : styles.link}>

//               {link.label}
//             </a>
//           </Link>
       
//         ))}
//       </nav>
//     </div>
//   );
// };
// Определяем компонент навигации
const Navigation = ({ navLinks }: Props) => {
    const { pathname } = useRouter();
  
    return (
      <div className={styles.container}>
        {/* Создаем навигационное меню с использованием Link */}
        <nav className={styles.nav}>
         
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {/* Добавляем активное состояние для текущего URL */}
              <a className={pathname === link.href ? styles.activeLink : styles.link}>
                {link.label}
              </a>
            </Link>
          ))}
        </nav>
      </div>
    );
  };

export { Navigation }; // Экспортируем компонент навигации





