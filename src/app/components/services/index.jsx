import React, { useEffect, useState } from "react";

import { getList, getListWithCustomField } from "app/const/firebase";

import CardService from "./components/card";
import LoadingSkeletonItem from "../loading-skeleton/LoadingSkeletonItem";

import "./styles.scss";

function ServiceComponent() {
  const [isLoadingMenu, setIsLoadingMenu] = useState(false);
  const [isLoadingItem, setIsLoadingItem] = useState(false);
  const [isActiveMenu, setIsActiveMenu] = useState("");
  const [serviceList, setServiceList] = useState([]);
  const [menu, setMenu] = useState([
    {
      name: "Tất cả",
      id: "",
    },
  ]);

  const useEffectFetchService = (effectCallback) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(effectCallback, []);
  };

  const useEffectFetchDetailService = (effectCallback) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(effectCallback, [isActiveMenu]);
  };

  useEffectFetchService(() => {
    setIsLoadingMenu(true);

    getList("category")
      .then((res) => {
        const newMenu = [...menu, ...res];
        setIsLoadingMenu(false);
        setMenu(newMenu);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoadingMenu(false);
      });
  });

  useEffectFetchDetailService(() => {
    setIsLoadingItem(true);

    if (isActiveMenu !== "") {
      getListWithCustomField("product", "categoryId", isActiveMenu)
        .then((res) => {
          setIsLoadingItem(false);
          setServiceList(res);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setIsLoadingItem(false);
        });
    } else {
      getList("product")
        .then((res) => {
          setIsLoadingItem(false);

          setServiceList(res);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setIsLoadingItem(false);
        });
    }
  });

  const handleChangeTab = (tabId) => {
    setIsActiveMenu(tabId);
  };

  return (
    <div>
      <div className="wrapper-service">
        <h2 className="wrapper-service__title">Bảng dịch vụ</h2>

        <h3 className="wrapper-service__subtitle">Tiết kiệm đến 50%</h3>

        {isLoadingMenu ? (
          <h2>Đang tải</h2>
        ) : (
          <>
            <div className={`mb-4 justify-content-center bm-wrapper-menu`}>
              {menu.map((item, idx) => {
                return (
                  <div
                    key={`${idx}`}
                    onClick={() => {
                      handleChangeTab(item.id);
                    }}
                    className={`btn-menu-tab ${
                      isActiveMenu === item.id ? "active" : ""
                    }`}
                  >
                    {item.name}
                  </div>
                );
              })}
            </div>

            {isLoadingItem ? (
              <div className="container">
                <div className="row">
                  {Array(3)
                    .fill(0)
                    .map((item, idx) => {
                      return (
                        <div
                          className="col-12 col-lg-4 col-sm-6 mb-3"
                          key={`${idx}`}
                        >
                          <LoadingSkeletonItem />
                        </div>
                      );
                    })}
                </div>
              </div>
            ) : (
              <div className="row">
                {serviceList.map((item, idx) => {
                  return (
                    <div className="col-12 col-lg-4 col-sm-6" key={`${idx}`}>
                      <CardService {...item} />
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default ServiceComponent;
