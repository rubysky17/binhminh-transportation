import React, { Fragment, useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import useTranslation from "hooks/useTranslate/useTranslation";
import { useLocalStorage } from "hooks/useStorage/useStorage";

import { BsTelephoneFill } from "react-icons/bs";
import { GrMenu, GrFormClose } from "react-icons/gr";
import { HiChevronDown } from "react-icons/hi";

import Popover from "../popover";

import VI from "assets/images/vi.png";
import CN from "assets/images/cn.png";
import US from "assets/images/us.png";
import KR from "assets/images/kr.png";

import "./Header.scss";

const Header = () => {
  const { pathname } = useLocation();
  const [showShadow, setShowShadow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [language, setLanguage] = useLocalStorage("language");
  const [isOpenPopOver, setIsOpenPopOver] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowShadow(true);
      } else {
        setShowShadow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const phoneString = "0911191314";

  const languageList = [
    {
      name: "vi",
      img: VI,
    },
    {
      name: "en",
      img: US,
    },
    {
      name: "cn",
      img: CN,
    },
    {
      name: "kr",
      img: KR,
    },
  ];

  const handleTogglePopOver = () => {
    setIsOpenPopOver(!isOpenPopOver);
  };

  return (
    <Fragment>
      <header className={`header ${showShadow ? "is-show" : ""}`}>
        <div className="wrapper header-wr header-wrap">
          <Link to="/">
            <span className="header-logo">
              <img src="/logo-binhminh.jpg" alt="" />
              {/* <h2>Bình Minh Transportation</h2> */}
            </span>
          </Link>

          <div className="wrapper-header-menu">
            <ul className={`header-nav__list ${showMenu ? "is-show" : ""}`}>
              <GrFormClose
                onClick={() => setShowMenu(false)}
                className="header-menu__close"
              ></GrFormClose>

              <li className="header-nav__item">
                <NavLink
                  className="header-title"
                  to="/"
                  onClick={() => setShowMenu(false)}
                  activeClassName={`/` === pathname ? "active" : ""}
                >
                  {t("homepage")}
                </NavLink>
              </li>

              <li className="header-nav__item">
                <NavLink
                  className="header-title"
                  to="/dich-vu"
                  onClick={() => setShowMenu(false)}
                  activeClassName={`/dich-vu` === pathname ? "active" : ""}
                >
                  {t("service")}
                </NavLink>
              </li>

              {/* <li className="header-nav__item">
                <NavLink
                  className="header-title"
                  to="/gioi-thieu"
                  onClick={() => setShowMenu(false)}
                  activeClassName={`/gioi-thieu` === pathname ? "active" : ""}
                >
                  Giới thiệu
                </NavLink>
              </li> */}

              <li className="header-nav__item">
                <NavLink
                  className="header-title"
                  to="/lien-he"
                  onClick={() => setShowMenu(false)}
                  activeClassName={`/lien-he` === pathname ? "active" : ""}
                >
                  {t("Contact")}
                </NavLink>
              </li>

              <button className="btn header-phone">
                <a
                  href="tel:0911191314"
                  className="header-nav__contact animate-pulse"
                >
                  <span>
                    <BsTelephoneFill className="animate-turnCircle"></BsTelephoneFill>
                  </span>

                  <span className="text-effect">
                    {phoneString.split("").map((number, idx) => {
                      return (
                        <span className="text-child" key={idx}>
                          {number}
                        </span>
                      );
                    })}
                  </span>
                </a>
              </button>
            </ul>

            <div
              className="button-translate"
              onClick={() => {
                handleTogglePopOver();
              }}
            >
              {language ? (
                <>
                  {languageList.map((lang, idx) => {
                    return (
                      <>
                        {language === lang.name && (
                          <img
                            src={lang.img}
                            alt="ngôn ngữ anguages"
                            key={idx}
                          />
                        )}
                      </>
                    );
                  })}
                </>
              ) : (
                <img src={VI} alt="ngôn ngữ anguages" />
              )}

              <span>
                <HiChevronDown />
              </span>
              <Popover
                isOpen={isOpenPopOver}
                onClose={() => {
                  handleTogglePopOver();
                }}
              >
                {languageList.map((lang, idx) => {
                  return (
                    <img
                      src={lang.img}
                      alt="ngôn ngữ languages"
                      key={idx}
                      onClick={() => {
                        setLanguage(lang.name);

                        window.location.reload();
                      }}
                      className="img-flag"
                    />
                  );
                })}
              </Popover>
            </div>
          </div>

          <GrMenu
            onClick={() => setShowMenu(!showMenu)}
            className="header-menu__btn is-show"
          ></GrMenu>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
