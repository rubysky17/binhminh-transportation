import React from "react";

import {
  HiAdjustments,
  HiCheck,
  HiClock,
  HiCog,
  HiCurrencyDollar,
  HiUserCircle,
} from "react-icons/hi";

import { Swiper, SwiperSlide } from "swiper/react";
import useTranslation from "hooks/useTranslate/useTranslation";

import "./styles.scss";
import "swiper/swiper.min.css";

function IntroService() {
  const { t } = useTranslation();

  const SERVICE_LIST = [
    {
      title: "Car rental",
      carousel: () => {
        return (
          <Swiper spaceBetween={50} slidesPerView={1}>
            <SwiperSlide>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/binhminh-transportation.appspot.com/o/categories%2Foto_2.jpg?alt=media&token=7567f345-6bb9-4a73-9f21-ae905ef78144"
                className="carousel-img"
                alt="oto 2"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/binhminh-transportation.appspot.com/o/categories%2Foto_3.jpg?alt=media&token=7567f345-6bb9-4a73-9f21-ae905ef78144"
                className="carousel-img"
                alt="oto 3"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/binhminh-transportation.appspot.com/o/categories%2Foto_4.jpg?alt=media&token=7567f345-6bb9-4a73-9f21-ae905ef78144"
                className="carousel-img"
                alt="oto 4"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/binhminh-transportation.appspot.com/o/categories%2Foto_1.jpg?alt=media&token=7567f345-6bb9-4a73-9f21-ae905ef78144"
                className="carousel-img"
                alt="oto 1"
              />
            </SwiperSlide>
          </Swiper>
        );
      },
      listItem: [
        {
          title: "Car for rent",
          description:
            "New car quality, safety system, you can go anywhere, self-driving and driverless car",
          icon: <HiCurrencyDollar />,
        },
        {
          title: "Car rental 4 - 45 seats",
          description:
            "The interior of the car is luxurious to make customers feel comfortable",
          icon: <HiCog />,
        },
        {
          title: "24/7 service support",
          description:
            "We always listen to your comments and are always ready to answer all your questions",
          icon: <HiClock />,
        },
      ],
      position: "left",
    },
    {
      title: "Motorcycle rental",
      carousel: () => {
        return (
          <Swiper spaceBetween={50} slidesPerView={1}>
            <SwiperSlide>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/binhminh-transportation.appspot.com/o/categories%2Fxemay_3.png?alt=media&token=7b66eae1-e051-488f-accc-0b74fadcd597"
                className="carousel-img"
                alt="home 2"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/binhminh-transportation.appspot.com/o/categories%2Fxemay_1.jpeg?alt=media&token=7b66eae1-e051-488f-accc-0b74fadcd597"
                className="carousel-img"
                alt="home 1"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/binhminh-transportation.appspot.com/o/categories%2Fxemay_2.jpeg?alt=media&token=7b66eae1-e051-488f-accc-0b74fadcd597"
                className="carousel-img"
                alt="home 2"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/binhminh-transportation.appspot.com/o/categories%2Fxemay_4.jpeg?alt=media&token=7b66eae1-e051-488f-accc-0b74fadcd597"
                className="carousel-img"
                alt="home 3"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/binhminh-transportation.appspot.com/o/categories%2Fxemay_5.png?alt=media&token=7b66eae1-e051-488f-accc-0b74fadcd597"
                className="carousel-img"
                alt="home 4"
              />
            </SwiperSlide>
          </Swiper>
        );
      },
      listItem: [
        {
          title: "Car rental conditions",
          description:
            "Just need a household or ID card, you can immediately own a beautiful car to go out and play around Phu Quoc",
          icon: <HiUserCircle />,
        },
        {
          title: "Scooters and scooters of all kinds",
          description:
            "We provide a full range of color models of different cars of",
          icon: <HiAdjustments />,
        },
        {
          title: "Delivery to the place upon request",
          description:
            "Fast delivery service, simple rental procedures, cars are always checked regularly every day",
          icon: <HiCheck />,
        },
      ],
      position: "right",
    },
    {
      title: "Hotel rental",
      carousel: () => {
        return (
          <Swiper spaceBetween={50} slidesPerView={1}>
            <SwiperSlide>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/binhminh-transportation.appspot.com/o/categories%2Fhome_1.jpg?alt=media&token=a140ec69-22fb-4630-8061-967aa4c71e4e"
                className="carousel-img"
                alt="home 1"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/binhminh-transportation.appspot.com/o/categories%2Fhome_2.jpg?alt=media&token=a140ec69-22fb-4630-8061-967aa4c71e4e"
                className="carousel-img"
                alt="home 2"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/binhminh-transportation.appspot.com/o/categories%2Fhome_3.jpg?alt=media&token=a140ec69-22fb-4630-8061-967aa4c71e4e"
                className="carousel-img"
                alt="home 3"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/binhminh-transportation.appspot.com/o/categories%2Fhome_4.jpg?alt=media&token=a140ec69-22fb-4630-8061-967aa4c71e4e"
                className="carousel-img"
                alt="home 4"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/binhminh-transportation.appspot.com/o/categories%2Fhome_5.jpg?alt=media&token=a140ec69-22fb-4630-8061-967aa4c71e4e"
                className="carousel-img"
                alt="home 5"
              />
            </SwiperSlide>
          </Swiper>
        );
      },
      listItem: [
        {
          title: "Conditions of room rental",
          description:
            "Just a passport or ID card and the procedure for renting a room is extremely simple",
          icon: <HiCheck />,
        },
        {
          title: "Variety of services",
          description:
            "We provide a full range of hotel services from single rooms to double rooms etc",
          icon: <HiCheck />,
        },
        {
          title: "Comfortable interior",
          description:
            "The hotel room furniture is high quality, rich and fully meets all the essential needs",
          icon: <HiCheck />,
        },
      ],
      position: "left",
    },
  ];

  return (
    <div className="wrapper-service">
      <h2 className="wrapper-service__title">{t("Introduce")}</h2>

      <h3 className="wrapper-service__subtitle">
        {t("Car rental for sightseeing and accommodation in Phu Quoc")}
      </h3>

      <div className="wrapper-service__card">
        {SERVICE_LIST.map((service, index) => {
          return (
            <div
              className={`${
                service.position === "right" ? "" : "wrapper-card-right"
              } wrapper-card`}
              key={`${index}`}
            >
              {service.position === "right" && (
                <div className="wrapper-card__image">{service.carousel()}</div>
              )}

              <div className="wrapper-card__text">
                <h1 className="wrapper-card__text-servicename">
                  {t(service.title)}
                </h1>

                {service.listItem.map((serviceItem, idx) => {
                  return (
                    <div className="wrapper-card__text-service" key={idx}>
                      <div className="wrapper-card__text-icon">
                        {serviceItem.icon}
                      </div>

                      <div>
                        <h3 className="wrapper-card__text-title">
                          {t(serviceItem.title)}
                        </h3>

                        <p className="wrapper-card__text-desc">
                          {t(serviceItem.description)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {service.position === "left" && (
                <div className="wrapper-card__image">{service.carousel()}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default IntroService;
