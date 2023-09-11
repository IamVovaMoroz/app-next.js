

// 2 способ

import { Metadata } from "next";
import styles from "./TheBlogStyles.module.css"; // Замените YourStyles на реальное имя вашего CSS-модуля


async function getData(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      // Обновление информации раз в 60 секунд
      next: {
        revalidate: 60,
      },
    });
  
    return response.json();
  }


// 
type Props = {
    params: { id: string };
  };

//   для сео на вложенности
export async function generateMetadata({ params:{id} }:  Props):Promise<Metadata> {
    const post = await getData(id)

    console.log(post)

    return {
        title:  post.title
    }
}


export default async function Post({ params:{id} }:  Props) {
 const post = await getData(id)
    return <>
    <h1 className={styles.heading}>{post.title}</h1>
      <p className={styles.body}>{post.body}</p>
    </>
    
  }


