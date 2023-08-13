import React from "react";

import useTranslation from "hooks/useTranslate/useTranslation";
import { formatNumber } from "helpers/helpers";

import "./styles.scss";

function CardService(props) {
  const { content, title, img, price, unit } = props;
  const { t } = useTranslation();

  return (
    <div className="wrapper-card-service">
      <div className="wrapper-card-service__image">
        <img src={img[0]} alt="src_image" />
      </div>

      <div className="wrapper-card-service__text">
        <p className="wrapper-card-service__text-name">{title}</p>

        <p className="wrapper-card-service__text-info">{content}</p>

        <p className="wrapper-card-service__text-price">
          Giá: {formatNumber(price)}/{t(unit)}
        </p>
      </div>
    </div>
  );
}

export default CardService;
