import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import useTranslation from "hooks/useTranslate/useTranslation";
import { formatNumber } from "helpers/helpers";
import { useLocalStorage } from "hooks/useStorage/useStorage";

import "./styles.scss";

function CardService(props) {
  const {
    content_vi,
    content_en,
    content_kr,
    content_cn,
    title_vi,
    title_en,
    title_kr,
    title_cn,
    img,
    price,
    unit,
  } = props;
  const { t } = useTranslation();
  const [language] = useLocalStorage("language");

  const title = () => {
    switch (language) {
      case "vi":
        return title_vi;

      case "en":
        return title_en;

      case "kr":
        return title_kr;

      case "cn":
        return title_cn;

      default:
        return title_vi;
    }
  };
  const content = () => {
    switch (language) {
      case "vi":
        return content_vi;

      case "en":
        return content_en;

      case "kr":
        return content_kr;

      case "cn":
        return content_cn;

      default:
        return content_vi;
    }
  };

  return (
    <div className="wrapper-card-service">
      <div className="wrapper-card-service__image">
        {img.length >= 2 ? (
          <Swiper spaceBetween={50} slidesPerView={1}>
            {img.map((src, index) => {
              return (
                <SwiperSlide key={index}>
                  <img src={src} className="carousel-img" alt="oto 2" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <img src={img[0]} alt="src_image" />
        )}
      </div>

      <div className="wrapper-card-service__text">
        <p className="wrapper-card-service__text-name">{title()}</p>

        <p className="wrapper-card-service__text-info">{content()}</p>

        <p className="wrapper-card-service__text-price">
          {t("Giá chỉ từ")}: {formatNumber(price)} {`VNĐ`}/{t(unit)}
        </p>
      </div>
    </div>
  );
}

export default CardService;
