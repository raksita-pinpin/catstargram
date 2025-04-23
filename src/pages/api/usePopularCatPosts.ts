import { useEffect, useState } from "react";
import { CatPost } from "./useCatPosts";

export function usePopularCatPosts() {
  const [posts, setPosts] = useState<CatPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://catstagram.amornnan.xyz/api/public/posts/featured");
        if (!res.ok) throw new Error("Failed to fetch popular posts");
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
