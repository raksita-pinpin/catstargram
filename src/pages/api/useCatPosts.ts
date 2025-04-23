// hooks/useCatPosts.ts
import { useEffect, useState } from "react";

export interface User {
  id: number;
  username: string;
  name: string;
  avatar: string;
}

export interface CatPost {
  id: number;
  image: string;
  caption: string;
  user: User;
  likes_count: number;
  comments_count: number;
  created_at: string;
}

export function useCatPosts() {
  const [posts, setPosts] = useState<CatPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://catstagram.amornnan.xyz/api/public/posts/recent");
        if (!res.ok) throw new Error("Failed to fetch posts");
        const data = await res.json();
        setPosts(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
}
