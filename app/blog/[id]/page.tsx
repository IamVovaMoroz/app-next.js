// "use client"

import { Metadata } from "next";

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
    return <><h1>{post.title}</h1>;
    <p>{post.body}</p></>
    
  }

// 2 способ

//   type Props = {
//     params: { id: string };
//   };

//    export default function Post({ params }: Props) {
//   const { id } = params;

//   return <h1>Post page {id}</h1>;
// }