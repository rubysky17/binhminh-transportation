import React from "react";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import "./NewSlide.scss";

const NewSlideItem = ({ image, content, key }) => {
  return (
    <div className="slider-item">
      <div className="slider-overlay"></div>
      <div className="slider-img">
        <img src={image} alt="" />
      </div>

      <h2 className="slider-content">
        <Link to={"/san-pham"} className="slider-btn">
          Xem chi tiết
          <BiChevronRight></BiChevronRight>
        </Link>
        <span className="slider-text">" {content}"</span>
      </h2>
    </div>
  );
};

export default NewSlideItem;
