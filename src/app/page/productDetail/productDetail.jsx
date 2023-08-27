import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import ProductForm from "./productForm/productForm";
import { Toasts } from "../common/toasts/toasts";

import { getDetailProductAction } from "core/redux/actions/productActions";
import { addOrderAction } from "core/redux/actions/userActions";

import "./productDetail.scss";

function ProductDetail() {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  // const { editProduct } = useSelector((state) => state.product);
  // const { isValid } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getDetailProductAction(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  function handleOrder(value) {
    // console.log({ value });
    // const DEFAULT_PRODUCT = {
    //   id: "",
    //   title: "",
    //   content: "",
    //   img: [],
    // };

    const buildFormSubmit = {
      name: "",
      phone: "",
      // address: "",
      // product: DEFAULT_PRODUCT,
      // quantity: 0,
      date: Date.now(),
    };

    const payload = {
      ...buildFormSubmit,
      ...value,
      // product: editProduct,
    };

    dispatch(addOrderAction(payload));
  }

  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="background-page product-detail">
          {/* <ProductContent id={id} product={editProduct} /> */}

          <ProductForm id={id} onSubmit={handleOrder} history={history} />
        </div>

        <Toasts />
      </div>
    </React.Fragment>
  );
}

export default ProductDetail;
