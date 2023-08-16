import React from "react";

import "./Contact.scss";

export const phoneNumber = "0901191314";

export const Contact = () => {
  return (
    <div className="wrapper wrapper-contact">
      <div className="background-page contact">
        <h1 className="contact__title">Giới thiệu công ty</h1>

        <h3 className="contact__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique
          risus nec feugiat in. Aliquet porttitor lacus luctus accumsan tortor
          posuere ac ut consequat. Rutrum tellus pellentesque eu tincidunt
          tortor aliquam nulla facilisi cras.
        </h3>

        <div className="contact__content">
          <img
            className="contact__content-image"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            alt=""
          />
          ß
          <ul className="contact__content-list">
            <li className="contact__content-line">
              Pulvinar elementum integer enim neque volutpat ac. Sit amet
              facilisis magna etiam tempor orci eu lobortis elementum. Nunc
              pulvinar sapien et ligula ullamcorper.
            </li>

            <li className="contact__content-line">
              Pulvinar elementum integer enim neque volutpat ac. Sit amet
              facilisis magna etiam tempor orci eu lobortis elementum. Nunc
              pulvinar sapien et ligula ullamcorper.
            </li>

            <li className="contact__content-line">
              Pulvinar elementum integer enim neque volutpat ac. Sit amet
              facilisis magna etiam tempor orci eu lobortis elementum. Nunc
              pulvinar sapien et ligula ullamcorper.
            </li>

            <li className="contact__content-line">
              Pulvinar elementum integer enim neque volutpat ac. Sit amet
              facilisis magna etiam tempor orci eu lobortis elementum. Nunc
              pulvinar sapien et ligula ullamcorper.
            </li>

            <li className="contact__content-line">
              Pulvinar elementum integer enim neque volutpat ac. Sit amet
              facilisis magna etiam tempor orci eu lobortis elementum. Nunc
              pulvinar sapien et ligula ullamcorper.
            </li>
          </ul>
        </div>

        <div className="contact__card">
          <div className="contact__card-item">
            <i className="contact__card-item-logo"></i>
            <p className="contact__card-item-text">
              Ipsum dolor sit amet consectetur. Turpis egestas integer eget
              aliquet n.
            </p>
          </div>

          <div className="contact__card-item">
            <button className="contact__card-item-btn">Liên Hệ Zalo</button>
            <p className="contact__card-item-phone">SĐT: {phoneNumber}</p>
          </div>
        </div>

        <p className="contact__info">
          Để biết thêm thông tin sản phẩm, quý khách hàng vui lòng liên hệ
          hotline của công ty để được phục giá cả tốt nhất. <br />
          Hotline : <a href={"tel:" + phoneNumber}>058.252.9925</a> <br />
          Địa chỉ :{" "}
          <a target="_plank" href="https://goo.gl/maps/zWeALuNm3qTM427H7">
            B1/9 ABC 2-6 xã Vĩnh Lộc A huyện Bình Chánh thành phố Hồ Chí Minh
          </a>
        </p>
      </div>
    </div>
  );
};
