import React from "react";
import { Route, Switch } from "react-router-dom";

import Modal from "app/page/common/modal";
import Table from "app/page/common/table";

import { ADD_PRODUCT, EDIT_PRODUCT } from "./constants";

import "../styles/allProducts.scss";

const AllProducts = ({ products, columns, products: data }) => {
  console.log(products, data);
  return (
    <section className="product-section">
      <Table heading="các dịch vụ" columns={columns} data={data} />

      <Switch>
        <Route
          path="/quan-tri/danh-sach/them-san-pham"
          render={(props) => (
            <Modal
              products={products}
              heading={"Thêm"}
              type={ADD_PRODUCT}
              {...props}
            />
          )}
        />

        {/* routing to edit a product */}
        <Route
          path="/quan-tri/danh-sach/sua-san-pham/:id"
          render={(props) => (
            <Modal
              products={products}
              heading={"Sửa"}
              type={EDIT_PRODUCT}
              {...props}
            />
          )}
        />
      </Switch>
    </section>
  );
};

export default AllProducts;
