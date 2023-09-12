// "use client"
// import { PostSearch } from "@/components/PostSearch";
// import { Posts } from "@/components/Posts";
// import { getAllPosts } from "@/services/getPosts";
// import { Metadata } from "next";
// import styles from './Blog.module.css';
// import { useEffect, useState } from "react";

// // получаем данные с сервера
// async function getData() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//         // Обновление информации раз в 60 секунд
//         next: {
//             revalidate: 60,
//         },
//     });

//     if (!response.ok) throw new Error("Unable to fetch posts");

//     return response.json();
// }

// //  для СЕО
// export const metadata: Metadata = {
//     title: "Blog | Next App",
//     description: "About my page",
// };

// // серверный компонент может быть асинхронным
// export default function Blog() {
//     // const posts = await getData();

//     const [posts, setPosts] = useState<any[]>([]);

//     const [loading, setLoading] = useState(true);
//     // получи все посты и когда получишь установи в качестве текущих setPosts
//     useEffect(() => {
//         getAllPosts()
//             // getAllPosts().then((data)=> setPosts(data))
//             .then(setPosts)
//             .finally(() => setLoading(false));
//     }, []);

//     return (
//         <div className={styles.container}>
//             <h1>Blog page</h1>
//             <PostSearch onSearch={setPosts}/>
//             {/* пока загрузка выводим h3, когда закончилась - разметку */}
//             {loading ? (
//                 <h3>loading...</h3>
//             ) : (

//                 <Posts posts={posts} />
              
//             )}
//         </div>
//     )
// }




// import { PostSearch } from "@/components/PostSearch";
// import { Posts } from "@/components/Posts";
// import { Metadata } from "next";
// import styles from './Blog.module.css';

// export const metadata: Metadata = {
//   title: "Blog | Next App",
// };

// export default function Blog() {
//   return (
//     <div className={styles.container}>
//       <h1>Blog page</h1>
//       <PostSearch />
//       <Posts />
//     </div>
//   );
// }

// Blog.tsx
// Blog.tsx
"use client";
import React, { useState } from "react";
import { PostSearch } from "@/components/PostSearch";
import { Posts } from "@/components/Posts";
import { Metadata } from "next";
import styles from './Blog.module.css';
import UseClientLogic from "../../components/Blog";


export default function Blog() {
  const [posts, setPosts] = useState<any[]>([]);

  // Вызываем UseClientLogic и передаем setPosts в качестве аргумента
  const { loading } = UseClientLogic(setPosts);

  return (
    <div className={styles.container}>
      <h1>Blog page</h1>
      <PostSearch onSearch={setPosts} />
      {loading ? (
        <h3>loading...</h3>
      ) : (
        <Posts posts={posts} />
      )}
    </div>
  );
}
