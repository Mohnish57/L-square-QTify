import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Carousel.css";
import { Navigation } from "swiper/modules";

const Carousel = ({ data, renderComponent }) => {
  return (
    <>
      <Swiper
        className={styles.swiper}
        slidesPerView={6}
        navigation={true}
        modules={[Navigation]}
      >
        {data.map((el) => (
          <SwiperSlide>{renderComponent(el)}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
