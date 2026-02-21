import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const SWIPER_IMGS = [
  {
    src: "/images/banners/banner-1.webp",
    alt: "Beautiful floral arrangement",
  },
  {
    src: "/images/banners/banner-2.webp",
    alt: "Fresh flower bouquet",
  },
  {
    src: "/images/banners/banner-3.webp",
    alt: "Fresh flower bouquet",
  },
  {
    src: "/images/banners/banner-4.webp",
    alt: "Fresh flower bouquet",
  },
];

const BannerSwiper = () => {
  return (
    <div className="w-full relative group md:py-2">
      <Swiper
        loop={true}
        centeredSlides={true}
        spaceBetween={20}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.25,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2, // Shows 50% width center slide, so 25% of left and 25% of right are visible
            spaceBetween: 24,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="w-full h-[200px] md:h-[300px] lg:h-[350px]"
      >
        {SWIPER_IMGS.map((img, index) => (
          <SwiperSlide
            key={index}
            className="rounded-2xl overflow-hidden shadow-md transition-all duration-300"
          >
            {({ isActive }) => (
              <div
                className={`relative w-full h-full transition-all duration-300 ${isActive ? "scale-100 opacity-100" : "scale-95 opacity-70"}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover block rounded-2xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSwiper;
