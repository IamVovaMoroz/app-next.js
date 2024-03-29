// import Link from "next/link";
// import styles from './Posts.module.css';

// type Props = {
//     posts: any[]
// }

// const Posts = ({ posts }: Props) => {
//     return (
//         <ul className={styles['posts-list']}>
//             {posts.map((post: any) => (
//                 <li key={post.id} className={styles['post-item']}>
//                     <Link href={`/blog/${post.id}`} className={styles['post-link']}>
//                         {post.title}
//                     </Link>
//                 </li>
//             ))}
//         </ul>
//     )
// }

// export { Posts }


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
import Link from "next/link";
import styles from './Posts.module.css';

type Props = {
    posts: any[]
}

const Posts = ({ posts }: Props) => {
    return (
        <ul className={styles['posts-list']}>
            {posts.map((post: any) => (
                <li key={post.id} className={styles['post-item']}>
                    <Link href={`/blog/${post.id}`} className={styles['post-link']}>
                        <div className={styles['post-container']}>
                            <h2 className={styles['post-title']}>{post.title}</h2>
                            <p className={styles['post-body']}>{post.body}</p>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export { Posts }
