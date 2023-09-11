"use client"; // Используется для клиентских компонентов

import { getPostsBySearch } from "@/services/getPosts"; // Импорт функции для получения постов по поиску
import { FormEventHandler, useState } from "react"; // Импорт необходимых хуков и типов
import styles from './PostSearch.module.css'; // Импорт файлов стилей
// Определение пропсов компонента
type Props = {
  onSearch: (value: any[]) => void; // Функция обратного вызова для передачи результатов поиска TS (any[]) => void) ичего не возвращает
};

// Компонент для поиска постов, принимает от пользователя onSearch
const PostSearch = ({ onSearch }: Props) => {
  // Использование хука useState для отслеживания значения поиска
  const [search, setSearch] = useState("");

  // Функция-обработчик отправки формы
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault(); 

    // Вызов функции getPostsBySearch для получения постов по поисковому запросу
    const posts = await getPostsBySearch(search);

    // Вызов функции обратного вызова onSearch для передачи результатов поиска
    onSearch(posts);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      {/* Ввод текста для поиска */}
      <input
        type="search"
        placeholder="Blog search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      ></input>

      {/* Кнопка для выполнения поиска */}
      <button type="submit" className={styles.button}>Search</button>
    </form>
  );
};

export { PostSearch };

// вариант через swr

// "use client"; // Используется для клиентских компонентов

// import { FormEventHandler, useState } from "react";
// import styles from './PostSearch.module.css';
// import useSWR from "swr";
// import { getPostsBySearch } from "@/services/getPosts";

// const PostSearch = () => {
//     const { mutate } = useSWR("allPosts");
//     const [search, setSearch] = useState("");

//     const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
//         event.preventDefault();
//         const posts = await getPostsBySearch(search);
//         mutate([...posts], false);
//     };

//     return (
//         <form onSubmit={handleSubmit} className={styles.container}>
//             <input
//                 type="search"
//                 placeholder="Blog search"
//                 value={search}
//                 onChange={(event) => setSearch(event.target.value)}
//             ></input>
//             <button type="submit" className={styles.button}>Search</button>
//         </form>
//     );
// };

// export { PostSearch };
