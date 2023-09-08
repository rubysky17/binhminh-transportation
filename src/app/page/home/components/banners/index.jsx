import React from "react";
import { HiCheck, HiPhone } from "react-icons/hi";
import useTranslation from "hooks/useTranslate/useTranslation";

import "./styles.scss";

function BannerBlock() {
  const { t } = useTranslation();

  return (
    <div className="container-fluid wrapper-banner-block">
      <div className="container wrapper-banner-block_content">
        <div className=" wrapper-banner-block__content-text">
          <h2>
            {t("Self_drive_car_rental")}, <br />
            {t("comfortably")}
          </h2>

          <div className="wrapper-banner-block__checklist">
            <p>
              <span className="mr-6">
                <HiCheck />
              </span>
              {t("Rental service by day")}
            </p>

            <p>
              <span className="mr-6">
                <HiCheck />
              </span>
              {t("Vehicles parked throughout the Area")}
            </p>

            <p>
              <span className="mr-6">
                <HiCheck />
              </span>
              {t("Car delivery 24/7")}
            </p>

            <p>
              <span className="mr-6">
                <HiCheck />
              </span>
              {t("2-way insurance")}
            </p>
          </div>

          <a className="wrapper-banner-block__callbtn" href="tel:+84911191314">
            <span className="mr-6">
              <HiPhone />
            </span>

            <span>{t("Call")}: 0911-19-13-14</span>
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
