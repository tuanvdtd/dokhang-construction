"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function ProjectDetail() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "/anh1.jpg",
    "/anh2.jpg",
    "/anh3.jpg",
    "/anh4.jpg",
    "/anh5.jpg",
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-12 py-22">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-4">
        <ul className="flex flex-wrap gap-1">
          <li>Trang chủ</li>
          <li>/</li>
          <li>Sản phẩm</li>
          <li>/</li>
          <li className="text-gray-800 font-medium">Thi công nhà phố</li>
        </ul>
      </nav>

      {/* Tiêu đề */}
      <h1 className="text-center text-2xl md:text-3xl font-semibold text-gray-900 mb-10">
        Nhà Phố Anh Hùng – Đội Nhân – Hà Nội
      </h1>

      {/* Layout chính */}
      <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-5 items-start">
        {/* Cột ảnh + slider */}
        <div className="w-full">
          <Swiper
            loop
            spaceBetween={10}
            navigation
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            modules={[Navigation, Thumbs, Autoplay]}
            autoplay={{
              delay: 2000, // thời gian giữa các slide (ms)
              disableOnInteraction: false, // vẫn tự chạy sau khi người dùng kéo
          }}
           onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="mb-4 rounded-2xl shadow-md"
          >
            {images.map((src, idx) => (
              <SwiperSlide key={idx} className="w-full " style={{ aspectRatio: '4/3' }}>
                <Image
                  src={src}
                  alt={`Ảnh ${idx + 1}`}
                  fill
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Slider thumbnail */}
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            watchSlidesProgress
            modules={[Thumbs]}
            className="cursor-pointer"
          >
            {images.map((src, idx) => (
              <SwiperSlide key={idx} >
                <div className={`overflow-hidden w-full border-[3px] rounded-md md:rounded-xl relative ${
                    activeIndex === idx
                      ? "border-[#576574] "
                      : "border-transparent opacity-55 hover:opacity-100"
                    }`} style={{ aspectRatio: '16/9' }}>
                <Image
                  src={src}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className={` object-cover rounded-md md:rounded-xl transition-all duration-300 ${
                    activeIndex === idx
                      ? " scale-105"
                      : ""
                  }`}
                />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Cột thông tin */}
        <div className="w-full bg-white rounded-2xl shadow-md p-6 md:p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Thông số</h2>

          <div className="space-y-3 text-gray-700 text-sm md:text-base">
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">Công trình:</span>
              <span>Nhà phố Đội Nhân</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">Chủ đầu tư:</span>
              <span>Anh Hùng</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">Địa chỉ:</span>
              <span>Ba Đình - Hà Nội</span>
            </div>
            <div className="border-b pb-2">
              <span className="font-medium">Công năng:</span>
              <ul className="list-disc list-inside mt-1 text-sm leading-relaxed">
                <li>Tầng 1: Shop bán hàng</li>
                <li>Tầng 2: Shop bán hàng</li>
                <li>Tầng 3: 1 phòng ngủ</li>
                <li>Tầng 4: Phòng khách</li>
                <li>Tầng 5: Phòng ăn</li>
                <li>Tầng 6: 1 phòng ngủ</li>
                <li>Tầng 7: Phòng thờ + sân phơi</li>
              </ul>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">Số tầng:</span>
              <span>7 tầng</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">Phong cách:</span>
              <span>Hiện đại</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">Diện tích:</span>
              <span>5,8m × 9,3m</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-medium">Loại hình:</span>
              <span>Nhà phố</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Năm thi công:</span>
              <span>2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
