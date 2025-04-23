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
      <div className="bg-pink-50 h-screen ">
        <div className=" max-w-screen-xl mx-auto py-8">
          <div className="bg-white min-h-[180px]">
          <div className="flex flex-col items-start justify-center min-h-[180px]">
            <span className="text-[36px]">Welcome to Catstagram</span>
            <span>Share your love for cats with the world! 🐱</span>
          </div>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto bg-pink-50">
          <PopularCat />
        </div>
        <div className="p-4 bg-pink-50">
          <div className="max-w-screen-xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Recent Posts</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[24px]">
              {posts.map((post) => (
                <div key={post.id} className="bg-white rounded shadow-md overflow-hidden w-full">
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
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
        </div>
      </div>
</DefaultLayout>

  );
}
