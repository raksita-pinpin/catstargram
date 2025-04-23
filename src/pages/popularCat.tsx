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

  // ทำการเพิ่มโพสต์ซ้ำให้ครบ 5 รายการถ้าจำนวนน้อยกว่า 5
  const postsToDisplay = [...popularPosts];
  while (postsToDisplay.length < 5) {
    postsToDisplay.push(...popularPosts); // ทำการคัดลอกโพสต์เดิมเพิ่มเข้าไป
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Featured Posts</h1>
      
      <Swiper
        slidesPerView={5} // แสดง 5 การ์ดในแต่ละหน้าจอ
        spaceBetween={16} // ระยะห่างระหว่างสไลด์ 16px
        loop={true} // ทำให้สไลด์วนลูปไปเรื่อย ๆ
        autoplay={{
            delay: 2000, // เลื่อนทุกๆ 2 วินาที
            disableOnInteraction: false, // ให้เลื่อนต่อไปแม้จะมีการคลิก
        }}
        pagination={{
            clickable: true,
        }}
        modules={[Pagination]} // ใช้แค่โมดูล Pagination
        className="mySwiper"
        >
        {postsToDisplay.map((post, index) => (
            <SwiperSlide key={index}>
            <div className="bg-white rounded shadow-md overflow-hidden h-[424px] w-[379px]"> {/* ตั้งค่าความสูงและความกว้างที่ต้องการ */}
                <img
                src={post.image}
                alt={post.caption}
                width={379} // กำหนดขนาดความกว้างของรูปภาพให้ตรงกับขนาด card
                height={300} // กำหนดความสูงของรูปภาพ
                className="w-full h-[300px] object-cover" // ปรับความสูงของรูปภาพ
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
  );
}
