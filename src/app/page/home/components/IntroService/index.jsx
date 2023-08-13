import React from "react";

import {
  HiAdjustments,
  HiCheck,
  HiClock,
  HiCog,
  HiCurrencyDollar,
  HiUserCircle,
} from "react-icons/hi";

import "./styles.scss";

function IntroService() {
  const SERVICE_LIST = [
    {
      title: "Cho thuê xe ôtô",
      imageLink: "https://thuexephuquoc.net/img/macbook-pro.png",
      listItem: [
        {
          title: "Cho thuê ôtô",
          description:
            "Chất lượng xe đời mới, hệ thống an toàn, bạn đi đâu cũng được, xe tự lái và có lái.",
          icon: <HiCurrencyDollar />,
        },
        {
          title: "Cho thuê xe ô tô 4 - 7 chỗ",
          description:
            "Nội thất xe sang trong nhằm tạo cho khách hàng cảm giác thoải mái.",
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
      imageLink: "https://thuexephuquoc.net/img/iphone.png",
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
          title: "gia xe tận nơi theo yêu cầu",
          description:
            "Dịch vụ giao xe nhanh, thủ tục cho thuê đơn giản, xe luôn luôn được kiểm tra thường xuyên hàng ngày, giá cả rẻ chất lượng không thay đổi, giao xe tại sân bay, bến tàu, khách sạn.",
          icon: <HiCheck />,
        },
      ],
      position: "right",
    },
    {
      title: "Cho thuê phòng trọ",
      imageLink: "https://thuexephuquoc.net/img/iphone.png",
      listItem: [
        {
          title: "Điều kiện thuê phòng",
          description:
            "Chỉ cần hộ chiều hoặc CMND là bạn có thể sử hữu ngay 1 chiếc xe đẹp đi chơi thả ga vòng quanh Phú Quốc.",
          icon: <HiCheck />,
        },
        {
          title: "Đa dạng các phòng",
          description:
            "Chúng tôi cung cấp đầy đủ mẫu mã màu sắc các loại xe khác nhau của các hãng Honda, Yamaha,…",
          icon: <HiCheck />,
        },
        {
          title: "Nội thất tiện nghi",
          description:
            "Dịch vụ giao xe nhanh, thủ tục cho thuê đơn giản, xe luôn luôn được kiểm tra thường xuyên hàng ngày, giá cả rẻ chất lượng không thay đổi, giao xe tại sân bay, bến tàu, khách sạn.",
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
                  <img src={service.imageLink} alt={service.imageLink} />
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
                  <img src={service.imageLink} alt={service.imageLink} />
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
