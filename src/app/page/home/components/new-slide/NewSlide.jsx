import React from "react";
import "./NewSlide.scss";
import { SwiperSlide, Swiper } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import { Autoplay, Pagination } from "swiper";
import NewSlideItem from "./NewSlideItem";
import { dataSlide } from "./data-slide/data-slide";
import "swiper/modules/navigation/navigation.scss";

const NewSlide = () => {
  return (
    <section className="slider-list">
      <Swiper
        centeredSlides={true}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        spaceBetween={20}
        slidesPerView={"auto"}
        className="mySwiper"
      >
        {dataSlide.map((item) => (
          <SwiperSlide key={item.id}>
            <NewSlideItem
              image={item.image}
              content={item.content}
            ></NewSlideItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default NewSlide;
