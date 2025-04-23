import Image from "next/image";
import { useCatPosts } from "./api/useCatPosts";
import Navbar from "@/components/navbar";
import DefaultLayout from "@/layout/defaultLayout";
import PopularCat from "./popularCat";

export default function Home() {
  const { posts, loading, error } = useCatPosts();

  if (loading) return <p>กำลังโหลดโพสต์แมว...</p>;
  if (error) return <p>เกิดข้อผิดพลาด: {error}</p>;

  return (
    <DefaultLayout>
      <PopularCat />

      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Recent Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[24px] mx-auto max-w-screen-xl">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded shadow-md overflow-hidden w-full">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}> {/* 16:9 aspect ratio */}
                <Image
                  src={post.image}
                  alt={post.caption}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t"
                />
              </div>
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
    </DefaultLayout>
  );
}
