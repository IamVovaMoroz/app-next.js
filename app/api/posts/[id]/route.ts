import { NextResponse } from "next/server"

import {headers, cookies} from "next/headers"

import {redirect} from "next/navigation"


// http://localhost:3000/api/posts/2323   ид поста 2323 к примеру.

// вторым можно указать res , но мы конкретезируем сразу {params}: {params: {id: string}}
export async function DELETE(req: Request, {params}: {params: {id: string}}) {
    // считываем параметр с q
    const id = params.id
// если не нужно ничего возращать, можно перекинуть на страницу куда нужно
    // redirect("/blog")

    // можем читать но не записывать
    const headerList = headers()
// верни мне Content-Type и какое значение передали в него, просто прочитать можем то что в заголовке пришло 
    const type = headerList.get("Content-Type")

    const cookiesList = cookies()

    const cook2 = cookiesList.get("Cookie_2")?.value

    // удалить пост
    // return NextResponse.json({ message: `Пост c номером ${id} был удален` });
    return NextResponse.json({ id, type, cook2 });
}

// import { NextResponse } from "next/server";

// export async function DELETE(req: Request, {params}: {params: {id: string}}) {
//     const id = params.id;
//     // Удалить пост
//     const message = `Пост с номером ${id} был удален`;
//     return NextResponse.json({ message });
// }