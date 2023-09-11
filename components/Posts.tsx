import Link from "next/link"
import styles from './Posts.module.css'; // Импорт файлов стилей

type Props = {
    posts: any[]
}

const Posts = ({ posts }: Props) => {
    return (
        <ul className={styles.list}>
            {posts.map((post: any) => (
                <li key={post.id} className={styles.item}>
                    <Link href={`/blog/${post.id}`} className={styles.link}>{post.title}</Link>
                </li>
            ))}
        </ul>
    )
}

export { Posts }

// вариант с swr

// import Link from "next/link";
// import styles from './Posts.module.css';

// type Props = {
//     posts: any[]
// }

// const Posts = ({ posts }: Props) => {
//     return (
//         <ul className={styles.list}>
//             {posts.map((post: any) => (
//                 <li key={post.id} className={styles.item}>
//                     <Link href={`/blog/${post.id}`} className={styles.link}>{post.title}</Link>
//                 </li>
//             ))}
//         </ul>
//     )
// }

// export { Posts }
