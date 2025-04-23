import Image from "next/image";
import { usePopularCatPosts } from "./api/usePopularCatPosts"; // import hook ใหม่
import DefaultLayout from "@/layout/defaultLayout";

export default function PopularCat() {
  const { posts: popularPosts, loading: popularLoading, error: popularError } = usePopularCatPosts(); // ใช้ hook ใหม่

  if (popularLoading) return <p>กำลังโหลดโพสต์ยอดนิยม...</p>;
  if (popularError) return <p>เกิดข้อผิดพลาด: {popularError}</p>;

  return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Featured Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {popularPosts.map((post) => (
            <div key={post.id} className="bg-white rounded shadow-md overflow-hidden">
              <Image
                src={post.image}
                alt={post.caption}
                width={500}
                height={500}
                className="w-full h-auto object-cover"
              />
              <div className="p-2">
                <div className="flex items-center gap-2">
                  <Image
                    src={post.user.avatar}
                    alt={post.user.username}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <span className="font-medium">{post.user.username}</span>
                </div>
                <p className="mt-2">{post.caption}</p>
                <div className="text-sm text-gray-500 mt-1">
                  ❤️ {post.likes_count} · 💬 {post.comments_count}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}
