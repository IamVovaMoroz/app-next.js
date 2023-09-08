"use client"

export default function ErrorWraper({error}:{error:Error}){
return <h1>Oops!!! {error.message}</h1>

}
