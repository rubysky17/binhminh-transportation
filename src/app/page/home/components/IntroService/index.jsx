import React from "react";

import {
  HiAdjustments,
  HiCheck,
  HiClock,
  HiCog,
  HiCurrencyDollar,
  HiUserCircle,
} from "react-icons/hi";

import { Swiper, SwiperSlide } from 'swiper/react'; 

import "./styles.scss";
import 'swiper/swiper.min.css';

function IntroService() {
  const SERVICE_LIST = [
    {
      title: "Cho thuê xe ôtô",
      carousel: () => {
        return  <Swiper
        spaceBetween={50}
        slidesPerView={1}
      >
        <SwiperSlide>
          <img src="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg" className="carousel-img"/>
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://www.buyrentkenya.com/discover/wp-content/uploads/2022/06/brk-blog-4reasons-why.png" className="carousel-img"/>
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://waynehomes.com/wp-content/uploads/2015/06/Cedar-Hill-Homestead-1.jpg" className="carousel-img"/>
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://assets.architecturaldigest.in/photos/62d66f2df8e893c06cec9970/16:9/w_1615,h_908,c_limit/This%20Hyderabad%20home%20marries%20French-style%20architecture%20with%20vernacular%20interiors.jpg" className="carousel-img"/>
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://robertelliotthomes.com/wp-content/uploads/2020/11/Luxury-homes-in-Dallas.jpg" className="carousel-img"/>
        </SwiperSlide>
      </Swiper>
      },
      listItem: [
        {
          title: "Cho thuê ôtô",
          description:
            "Chất lượng xe đời mới, hệ thống an toàn, bạn đi đâu cũng được, xe tự lái và có lái.",
          icon: <HiCurrencyDollar />,
        },
        {
          title: "Cho thuê xe ô tô 4 - 45 chỗ",
          description:
            "Nội thất xe sang trọng nhằm tạo cho khách hàng cảm giác thoải mái.",
          icon: <HiCog />,
        },
        {
          title: "Hỗ trợ dịch vụ 24/7",
          description:
            "Chúng tôi luôn luôn lắng nghe sự góp ý cũng như luôn sẵn sàng giải đáp mọi thắc mắc của quý khách hàng.",
          icon: <HiClock />,
        },
      ],
      position: "left",
    },
    {
      title: "Cho thuê xe máy",
      carousel: () => {
        return  <Swiper
        spaceBetween={50}
        slidesPerView={1}
      >
        <SwiperSlide>
          <img src="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg" className="carousel-img"/>
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://www.buyrentkenya.com/discover/wp-content/uploads/2022/06/brk-blog-4reasons-why.png" className="carousel-img"/>
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://waynehomes.com/wp-content/uploads/2015/06/Cedar-Hill-Homestead-1.jpg" className="carousel-img"/>
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://assets.architecturaldigest.in/photos/62d66f2df8e893c06cec9970/16:9/w_1615,h_908,c_limit/This%20Hyderabad%20home%20marries%20French-style%20architecture%20with%20vernacular%20interiors.jpg" className="carousel-img"/>
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://robertelliotthomes.com/wp-content/uploads/2020/11/Luxury-homes-in-Dallas.jpg" className="carousel-img"/>
        </SwiperSlide>
      </Swiper>
      },
      listItem: [
        {
          title: "Điều kiện thuê xe",
          description:
            "Chỉ cần hộ chiều hoặc CMND là bạn có thể sử hữu ngay 1 chiếc xe đẹp đi chơi thả ga vòng quanh Phú Quốc.",
          icon: <HiUserCircle />,
        },
        {
          title: "Xe tay ga và xe số các loại",
          description:
            "Chúng tôi cung cấp đầy đủ mẫu mã màu sắc các loại xe khác nhau của các hãng Honda, Yamaha,…",
          icon: <HiAdjustments />,
        },
        {
          title: "Giao xe tận nơi theo yêu cầu",
          description:
            "Dịch vụ giao xe nhanh, thủ tục cho thuê đơn giản, xe luôn luôn được kiểm tra thường xuyên hàng ngày, giá cả rẻ chất lượng không thay đổi, giao xe tại sân bay, bến tàu, khách sạn.",
          icon: <HiCheck />,
        },
      ],
      position: "right",
    },
    {
      title: "Cho thuê khách sạn",
      carousel: () => {
        return  <Swiper
        spaceBetween={50}
        slidesPerView={1}
      >
        <SwiperSlide>
          <img src="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg" className="carousel-img"/>
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://www.buyrentkenya.com/discover/wp-content/uploads/2022/06/brk-blog-4reasons-why.png" className="carousel-img"/>
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://waynehomes.com/wp-content/uploads/2015/06/Cedar-Hill-Homestead-1.jpg" className="carousel-img"/>
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://assets.architecturaldigest.in/photos/62d66f2df8e893c06cec9970/16:9/w_1615,h_908,c_limit/This%20Hyderabad%20home%20marries%20French-style%20architecture%20with%20vernacular%20interiors.jpg" className="carousel-img"/>
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://robertelliotthomes.com/wp-content/uploads/2020/11/Luxury-homes-in-Dallas.jpg" className="carousel-img"/>
        </SwiperSlide>
      </Swiper>
      },
      listItem: [
        {
          title: "Điều kiện thuê phòng",
          description:
            "Chỉ cần hộ chiếu hoặc CMND và thủ tục thuê phòng cực kỳ đơn giản.",
          icon: <HiCheck />,
        },
        {
          title: "Đa dạng các dịch vụ",
          description:
            "Chúng tôi cung cấp đầy đủ dịch vụ khách sạn từ phòng đơn đến phòng đôi v.v",
          icon: <HiCheck />,
        },
        {
          title: "Nội thất tiện nghi",
          description:
            "Nội thất phòng khách sạn chất lượng cao, phong phú và đáp ứng đầy đủ mọi nhu cầu thiết yếu.",
          icon: <HiCheck />,
        },
      ],
      position: "left",
    },
  ];

  return (
    <div className="wrapper-service">
      <h2 className="wrapper-service__title">Giới thiệu</h2>
      <h3 className="wrapper-service__subtitle">
        Dịch vụ cho thuê xe tham quan và nơi ở tại Phú Quốc
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
                <div className="wrapper-card__image">
                  {service.carousel()}
                </div>
              )}

              <div className="wrapper-card__text">
                <h1 className="wrapper-card__text-servicename">
                  {service.title}
                </h1>

                {service.listItem.map((serviceItem, idx) => {
                  return (
                    <div className="wrapper-card__text-service" key={idx}>
                      <div className="wrapper-card__text-icon">
                        {serviceItem.icon}
                      </div>

                      <div>
                        <h3 className="wrapper-card__text-title">
                          {serviceItem.title}
                        </h3>

                        <p className="wrapper-card__text-desc">
                          {serviceItem.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {service.position === "left" && (
                <div className="wrapper-card__image">
                   {service.carousel()}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default IntroService;
