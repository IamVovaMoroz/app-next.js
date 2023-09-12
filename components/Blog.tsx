// UseClientLogic.tsx
"use client"
import React, { useState, useEffect } from "react";
import { getAllPosts } from "@/services/getPosts";

export default function UseClientLogic(setPosts: (posts: any[]) => void) {
  const [posts, setLocalPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPosts()
      .then(setLocalPosts)
      .finally(() => setLoading(false));
  }, []);

  // Передаем полученные данные в setPosts из внешнего компонента
  useEffect(() => {
    setPosts(posts);
  }, [posts, setPosts]);

  return { posts: posts, loading };
}
