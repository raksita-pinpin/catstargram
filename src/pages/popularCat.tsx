import React from 'react';
import { usePopularCatPosts } from "./api/usePopularCatPosts"; // import hook ใหม่

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

export default function PopularCat() {
  const { posts: popularPosts, loading: popularLoading, error: popularError } = usePopularCatPosts(); // ใช้ hook ใหม่

  if (popularLoading) return <p>กำลังโหลดโพสต์ยอดนิยม...</p>;
  if (popularError) return <p>เกิดข้อผิดพลาด: {popularError}</p>;

  const postsToDisplay = [...popularPosts];
  while (postsToDisplay.length < 5) {
    postsToDisplay.push(...popularPosts);
  }

  return (
    <div className="bg-pink-50">
      <h1 className="text-2xl font-bold mb-4">Featured Posts</h1>
      <div className="bg-pink-50 py-10 px-4 rounded-xl">
        <Swiper
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          spaceBetween={24}
          loop={true} // ✅ เพิ่มบรรทัดนี้
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper !pb-10"
        >
          {postsToDisplay.map((post, index) => (
            <SwiperSlide key={index} className="!w-[379px] transition-transform duration-500 ease-in-out">
              <div className="card-wrapper bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 h-[424px] w-[379px] mx-auto">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-[300px] object-cover"
                />
                <div className="p-2 h-[124px] overflow-y-auto">
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
    </div>
  );
}
