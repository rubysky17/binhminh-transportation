import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { Switch } from "react-router-dom";

import ListGroup from "app/page/common/listGroup";
import AllProducts from "app/page/admin/admin-page/allProducts";
import NotFound from "../notFound/NotFound";
import TableOrder from "../common/tableOrder";
import Category from "./admin-page/category/Category";

import { getAllProductAction } from "core/redux/actions/productActions";
import { getCategoryAction } from "core/redux/actions/categoryActions";
import { getAllOrderAction } from "core/redux/actions/userActions";

import "./styles/containerAdmin.scss";

function Admin() {
  const dispatch = useDispatch();
  const [customers, setCustomers] = useState([]);
  const { productList } = useSelector((state) => state.product);
  const { orderList } = useSelector((state) => state.user);
  const columns = {
    order: [
      { value: "customer", label: "Tên khách hàng" },
      { value: "products", label: "Số điện thoại" },
      { value: "quantity", label: "Loại hình dịch vụ" },
      { value: "date", label: "Ngày gửi" },
      { value: "action", label: "Thao tác" },
    ],
    allProducts: [
      {
        value: "Stt",
        label: "STT",
      },
      { value: "title_vi", label: "Tên chi tiết" },
      {
        value: "categoryId",
        label: "Phân loại",
      },
      { value: "content_vi", label: "Mô tả" },
      { value: "url", label: "Hình ảnh" },
      { value: "action", label: "Thao tác" },
    ],
  };

  // Loading api lần đầu tiên vào trang admin
  useEffect(() => {
    dispatch(getAllProductAction());
    dispatch(getAllOrderAction());
    dispatch(getCategoryAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Redirect to="/quan-tri/danh-sach" component={AllProducts} />

      <main className=" container-admin">
        <ListGroup />

        <Switch>
          <Route
            path="/quan-tri/khach-hang"
            render={(props) => (
              <TableOrder
                heading={"Khách hàng"}
                columns={columns.order}
                data={orderList}
                isLoading={customers}
                {...props}
              />
            )}
          />

          <Route path="/quan-tri/dich-vu" component={Category} />

          <Route
            path="/quan-tri/danh-sach"
            render={(props) => (
              <AllProducts
                products={productList}
                columns={columns.allProducts}
                {...props}
              />
            )}
          />

          <Route component={NotFound} />
        </Switch>
      </main>
    </>
  );
}

export default Admin;
