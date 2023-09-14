import { NextResponse } from "next/server";
import { posts } from "./posts";
// http://localhost:3000/api/posts => message: "hello"

// Запрос GET
export async function GET (req: Request){
// получаем то что пользователь вводит
    const {searchParams} = new URL(req.url)
// ("q")любое название перед началом того что полтзовател  вводит
    const query = searchParams.get("q")
// наши посты текущие берём из масива
    let currentPosts = posts
// если приходит запрос query то фильтруем наши посты, чтобы соответсвовало тому что в запросе
if (query) {
    currentPosts = posts.filter((post) =>
      post.title.toLowerCase() === query.toLowerCase()
    );
  }

  return NextResponse.json(currentPosts);
}

// запрос POST
export async function POST (req: Request){
const body = await req.json()

  
    console.log(body)
     return NextResponse.json({body})
}

// import { NextResponse } from 'next/server';
// import { posts } from './posts'

// export async function GET(req: Request) {
//   const { searchParams } = new URL(req.url)

//   const query = searchParams.get('q');

//   let currentPosts = posts;

//   if (query) {
//     currentPosts = posts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
//   }

//   return NextResponse.json(currentPosts)
// }

// export async function POST(req: Request) {
//   const body = await req.json()

//   console.log(body)

//   return NextResponse.json({ body })
// }