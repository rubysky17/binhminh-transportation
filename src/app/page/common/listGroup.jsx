import React from "react";
import { Link } from "react-router-dom";
import { icons } from "assets/icons/icons-svg";

import logo from "../../../assets/images/logo-binhminh.jpg";

import "../common/styles/listGroup.scss";

const menuList = [
  {
    name: "Danh sách",
    icon: icons.iconProduct,
    pathLink: "/quan-tri/danh-sach",
  },
  {
    name: "Khách hàng",
    icon: icons.iconOder,
    pathLink: "/quan-tri/khach-hang",
  },
  {
    name: "Dịch vụ",
    icon: icons.iconOder,
    pathLink: "/quan-tri/dich-vu",
  },
];

const ListGroup = () => {
  const linkBrowserName = window.location.pathname;

  return (
    <section className="menu">
      <span className="menu__logo d-flex justify-content-center">
        <img src={logo} alt="" />
      </span>

      {/* <div className="menu__avatar">
        <img src="https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg" alt="" />
        <h2>Admin</h2>
      </div> */}

      <ul className="menu__list">
        {menuList.map((item, index) => (
          <li>
            <Link
              key={index}
              to={item.pathLink}
              className={
                "menu__item " +
                (linkBrowserName.includes(item.pathLink) ? "active" : "")
              }
            >
              <i className="menu__item-icon">{item.icon}</i>
              <p className="menu__item-name">{item.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ListGroup;
