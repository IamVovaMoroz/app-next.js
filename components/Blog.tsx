// BlogLogic.tsx
"use client";
import React, { useEffect, useState } from "react";
import { PostSearch } from "@/components/PostSearch";
import { Posts } from "@/components/Posts";
import { getAllPosts } from "@/services/getPosts";

import styles from './../app/blog/Blog.module.css';



export default function BlogLogic() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getAllPosts();
        setPosts(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

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
