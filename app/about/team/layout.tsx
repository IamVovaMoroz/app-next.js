import Link from "next/link"

export default function TeamLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <div>
        <h1>About teams</h1>
        <ul>
       
            <li><Link href="/about/team/teamone">Team One</Link></li>
            <li><Link href="/about/team/teamtwo">Team Two</Link></li>
        </ul>
        {children}
    </div>

}
