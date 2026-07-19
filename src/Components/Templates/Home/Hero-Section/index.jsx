import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Pagination, Autoplay } from "swiper/modules";

const banners = [
  {
    id: 1,
    img: "/assets/static/jezael-melgoza-layMbSJ3YOE-unsplash.jpg",
    alt: "banner",
  },
  {
    id: 2,
    img: "/assets/static/clark-street-mercantile-P3pI6xzovu0-unsplash.jpg",
    alt: "banner",
  },
  {
    id: 3,
    img: "/assets/static/freestocks-yqBKaF1KecM-unsplash.jpg",
    alt: "banner",
  },
  {
    id: 4,
    img: "/assets/static/hc-digital-7qCeFo19r24-unsplash.jpg",
    alt: "banner",
  },
  {
    id: 5,
    img: "/assets/static/heidi-fin-2TLREZi7BUg-unsplash.jpg",
    alt: "banner",
  },
];

function HeroSection() {
  return (
    <Swiper
      className="mySwiper h-[280px] sm:h-[400px] md:h-[550px] lg:h-[650px] xl:h-[800px]"
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
    >
      {banners.map((banner) => (
        <SwiperSlide key={banner.id} className="h-full">
          <img
            src={banner.img}
            className="w-full h-full object-cover"
            alt={banner.alt}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HeroSection;
