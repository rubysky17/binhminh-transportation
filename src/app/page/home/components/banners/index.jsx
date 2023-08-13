import React from "react";
import { HiCheck, HiPhone } from "react-icons/hi";

import "./styles.scss";

function BannerBlock() {
  return (
    <div className="container-fluid wrapper-banner-block">
      <div className="container wrapper-banner-block_content">
        <div className=" wrapper-banner-block__content-text">
          <h2>
            Thuê xe tự lái, <br />
            thoải mái vi vu
          </h2>

          <div className="wrapper-banner-block__checklist">
            <p>
              <span className="mr-6">
                <HiCheck />
              </span>
              Cho thuê dịch vụ theo ngày
            </p>

            <p>
              <span className="mr-6">
                <HiCheck />
              </span>
              Xe đậu khắp Khu vực
            </p>

            <p>
              <span className="mr-6">
                <HiCheck />
              </span>
              Giao nhận xe 24/7
            </p>

            <p>
              <span className="mr-6">
                <HiCheck />
              </span>
              Bảo hiểm 2 chiều
            </p>
          </div>

          <a className="wrapper-banner-block__callbtn" href="tel:+84582529925">
            <span className="mr-6">
              <HiPhone />
            </span>

            <span>Gọi: 058-252-9925</span>
          </a>
        </div>

        <div className="wrapper-banner-block__image">
          <img
            src="https://w.ladicdn.com/s1000x600/636483c4cedf2b0012d770ab/cars-20221116072727-ggrhr.png"
            alt="banner-block"
          />
        </div>
      </div>
    </div>
  );
}

export default BannerBlock;
