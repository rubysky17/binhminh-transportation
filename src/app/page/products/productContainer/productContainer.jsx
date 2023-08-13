import React from "react";
import ListProduct from "app/page/common/listProduct/listProduct";

import "./productContainer.scss";

const ProductContainer = (props) => {
  const { products: allProduct, isLoading } = props;

  return (
    <div className="wrapper">
      <div className="product-container">
        <ListProduct products={allProduct} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default ProductContainer;
