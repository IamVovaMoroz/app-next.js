import { Metadata } from "next"
import Link from "next/link"

// получаем данные с сервера
async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      // Обновление информации раз в 60 секунд
      next: {
        revalidate: 60,
      },
    });

    if(!response.ok) throw new Error("Unable to fetch posts")
  
    return response.json();
  }
//  для СЕО
export const metadata: Metadata = {
    title: 'Blog | Next App',
    description: 'About my page',
}


//   export default function Blog(){
//     return <h1>Blog page</h1>
// }

// серверный компонент может быть асинхронным
export default async function Blog() {
    const posts = await getData();

    return (<>
        <h1>Blog page</h1>
        <ul>
            {posts.map((post: any) => (
                <li key={post.id}>
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </li>
            ))}
        </ul>
    </>)


}