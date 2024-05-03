import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Carousel.css";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

const Carousel = ({ data, renderComponent }) => {
  console.log("cards to render", data);
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        className={styles.swiper}
        breakpoints={{
          425: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },

          1024: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 7,
            spaceBetween: 5,
          },
        }}
        navigation={true}
        modules={[Navigation]}
      >
        {data.map((el) => (
          <SwiperSlide key={el.id}>{renderComponent(el)}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
