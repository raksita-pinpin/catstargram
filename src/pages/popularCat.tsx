import React from 'react';
import { usePopularCatPosts } from "./api/usePopularCatPosts"; // import hook ใหม่

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default function PopularCat() {
  const { posts: popularPosts, loading: popularLoading, error: popularError } = usePopularCatPosts(); // ใช้ hook ใหม่

  if (popularLoading) return <p>กำลังโหลดโพสต์ยอดนิยม...</p>;
  if (popularError) return <p>เกิดข้อผิดพลาด: {popularError}</p>;

  return (
    <div className="p-50">
      <h1 className="text-2xl font-bold mb-4">Featured Posts</h1>
      
      <Swiper
        slidesPerView={2} // สามารถปรับจำนวนสไลด์ที่แสดงได้
        spaceBetween={30}
        loop={true} // ทำให้สไลด์วนลูปไปเรื่อย ๆ
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]} // ใช้แค่โมดูล Pagination
        className="mySwiper"
      >
        {popularPosts.map((post) => (
          <SwiperSlide key={post.id}>
            <div className="bg-white rounded shadow-md overflow-hidden">
              <img
                src={post.image}
                alt={post.caption}
                width={500}
                height={500}
                className="w-full h-auto object-cover"
              />
              <div className="p-2">
                <div className="flex items-center gap-2">
                  <img
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
