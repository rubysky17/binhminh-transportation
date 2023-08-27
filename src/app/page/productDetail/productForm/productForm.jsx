import React, { useState } from "react";
import "./productForm.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ToastForm from "app/components/toastForm/ToastForm";

const schemeValidation = yup.object({
  name: yup
    .string()
    .required("Vui lòng nhập tên của bạn")
    .min(5, "Vui lòng nhập tối thiểu 5 kí tự"),
  phone: yup
    .string()
    .required("Vui lòng nhập số điện thoại của bạn")
    .min(10, "Vui lòng nhập tối thiểu 10 kí tự"),
  // email: yup.string().email("Vui lòng nhập email của bạn"),
});

const ProductForm = (props) => {
  const [showNotifi, setShowNotifi] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(schemeValidation),
    mode: "onChange",
  });

  const submit = (values) => {
    setShowNotifi(false);

    if (isValid) {
      props.onSubmit(values);

      reset({
        name: "",
        phone: "",
        // email: "",
      });

      setShowNotifi(true);
    }
  };
  return (
    <div className="wrapper-form">
      {showNotifi && <ToastForm></ToastForm>}

      <section id="from-order" className="form-order__wrap">
        <div className="form-img">{svgImage}</div>

        <form
          autoComplete="off"
          onSubmit={handleSubmit(submit)}
          className="form-order"
        >
          <h3 className="form-order__title">Nhập Thông Tin Liên Hệ</h3>

          <div className="form-order__item">
            <label htmlFor="name">Tên của bạn</label>
            <input
              {...register("name")}
              id="name"
              placeholder="Vui lòng nhập họ tên của bạn"
            />
            <span>{errors.name?.message}</span>
          </div>

          <div className="form-order__item">
            <label htmlFor="phone">Số điện thoại</label>

            <input
              {...register("phone")}
              id="phone"
              placeholder="Vui lòng nhập số điện thoại của bạn"
            />

            <span>{errors.phone?.message}</span>
          </div>

          {/* <div className="form-order__item">
            <label htmlFor="email">Email của bạn</label>

            <input
              {...register("email")}
              placeholder="Vui lòng nhập email của bạn"
              id="email"
            />
            <span>{errors.email?.message}</span>
          </div> */}

          <button type="submit" className="btn form-btn">
            Gửi thông tin
          </button>
        </form>

        <div className="form-img">{svgImage}</div>
      </section>
    </div>
  );
};

export default ProductForm;

const svgImage = (
  <svg
    viewBox="0 0 413 339"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="form-img__svg"
  >
    <g clipPath="url(#clip0_32_604)">
      <path
        d="M329.882 35.2743C328.988 38.5798 330.016 43.7846 330.403 46.8702C330.817 50.169 325.088 53.1213 321.81 53.3079C321.89 52.216 321.583 51.1306 320.942 50.2423C320.934 51.2987 320.716 52.343 320.301 53.3146H292.944C289.499 46.8435 286.568 37.9999 289.733 28.8565C289.893 27.0202 290.593 25.272 291.746 23.8315C292.898 22.3909 294.451 21.3222 296.209 20.7594L311.126 15.9944C317.009 15.9944 324.227 16.8274 327.479 21.1992C328.918 23.212 329.882 25.5239 330.298 27.9615C330.715 30.3992 330.572 32.8993 329.882 35.2743Z"
        fill="#2F2E41"
      />
      <path
        d="M356.075 321.227C356.563 321.245 357.044 321.113 357.454 320.848C357.863 320.584 358.182 320.2 358.366 319.749C358.55 319.298 358.59 318.801 358.482 318.326C358.374 317.852 358.122 317.421 357.76 317.094C357.698 316.857 357.653 316.686 357.591 316.449C358.046 315.262 358.846 314.237 359.888 313.507C360.931 312.777 362.168 312.374 363.441 312.35C364.714 312.326 365.965 312.682 367.035 313.372C368.104 314.062 368.942 315.056 369.442 316.225C372.325 322.786 376.04 329.572 374.294 336.846C386.042 311.37 381.663 279.861 363.737 258.34C358.814 255.694 354.798 250.947 353.712 245.402C356.144 246.198 359.147 244.202 357.3 241.671C356.501 240.704 355.694 239.746 354.895 238.779C364.009 228.904 375.127 244.182 365.118 257.489C368.473 261.606 371.388 266.062 373.814 270.784C373.216 265.751 373.824 260.648 375.588 255.895C377.379 251.464 380.779 247.714 383.768 243.87C387.403 239.186 394.995 241.259 395.546 247.154C392.161 248.3 391.767 253.199 395.657 253.832C394.745 264.817 387.657 274.972 377.808 279.879C381.559 290.077 383.09 300.956 382.298 311.791C383.924 299.122 397.503 295.922 406.966 290.803C407.568 290.409 408.271 290.199 408.991 290.198C409.71 290.197 410.414 290.405 411.017 290.796C411.62 291.188 412.095 291.746 412.386 292.403C412.676 293.059 412.769 293.786 412.653 294.494C411.345 295.04 410.095 295.713 408.921 296.505C408.37 296.882 407.95 297.419 407.718 298.044C407.486 298.668 407.453 299.349 407.624 299.993C407.795 300.637 408.161 301.212 408.672 301.64C409.183 302.068 409.814 302.328 410.479 302.384C405.798 314.273 393.478 322.343 380.747 322.419C379.574 327.737 377.851 332.919 375.604 337.881L356.709 338.061C356.639 337.852 356.576 337.636 356.513 337.427C358.263 337.52 360.018 337.399 361.739 337.067C357.059 331.642 353.454 328.887 356.074 321.227L356.075 321.227Z"
        fill="#F2F2F2"
      />
      <path
        d="M317.078 325.02H309.707L306.2 296.647H317.078V325.02Z"
        fill="#FFB6B6"
      />
      <path
        d="M320.967 337.765H315.682L314.738 332.784L312.322 337.765H298.304C297.632 337.765 296.978 337.551 296.437 337.153C295.895 336.756 295.496 336.196 295.296 335.556C295.096 334.916 295.106 334.228 295.325 333.594C295.544 332.96 295.961 332.413 296.514 332.032L307.708 324.315V319.28L319.482 319.982L320.967 337.765Z"
        fill="#2F2E41"
      />
      <path
        d="M328.646 273.631L323.471 278.869L300.766 261.443L308.402 253.712L328.646 273.631Z"
        fill="#FFB6B6"
      />
      <path
        d="M340.47 279.815L336.76 283.571L332.544 280.745L334.401 285.959L324.559 295.922C324.088 296.399 323.475 296.714 322.812 296.82C322.148 296.925 321.468 296.817 320.871 296.509C320.274 296.202 319.791 295.712 319.492 295.111C319.194 294.51 319.095 293.83 319.212 293.169L321.566 279.796L317.973 276.261L326.74 268.385L340.47 279.815Z"
        fill="#2F2E41"
      />
      <path
        d="M269.69 120.136L291.983 84.7358C292.923 83.2332 293.233 81.422 292.847 79.693C292.461 77.964 291.409 76.4559 289.919 75.494C289.148 74.9965 288.283 74.6608 287.378 74.5076C286.473 74.3543 285.546 74.3867 284.654 74.6027C283.761 74.8187 282.922 75.2138 282.188 75.764C281.454 76.3141 280.839 77.0078 280.382 77.8026L258.355 115.283L244.009 137.495C242.815 137.287 241.586 137.45 240.489 137.964C239.392 138.477 238.48 139.315 237.876 140.364C237.273 141.412 237.008 142.621 237.117 143.825C237.226 145.03 237.703 146.172 238.485 147.096C239.267 148.02 240.314 148.681 241.486 148.99C242.657 149.299 243.896 149.241 245.033 148.823C246.17 148.405 247.15 147.648 247.841 146.654C248.532 145.661 248.9 144.479 248.894 143.27L269.69 120.136Z"
        fill="#FFB6B6"
      />
      <path
        d="M290.7 93.9938L292.579 93.64C292.326 93.1796 292.22 92.6529 292.276 92.1308C292.332 91.6087 292.547 91.1162 292.892 90.7196C293.236 90.323 293.695 90.0414 294.205 89.9126C294.715 89.7838 295.252 89.8141 295.744 89.9993C293.48 87.642 294.58 83.7608 296.036 80.8364C297.089 78.7226 298.273 76.634 298.788 74.3301C299.571 70.8326 298.562 66.5994 293.889 65.762C291.978 65.4637 290.023 65.8586 288.379 66.8753C285.442 68.6076 284.782 67.8534 282.928 70.6418L281.872 72.6009C280.516 74.7218 278.897 76.6636 277.054 78.3804C275.736 79.6904 274.674 81.2337 273.922 82.9315C273.823 83.1417 273.677 83.3262 273.495 83.4707C272.772 84.0284 271.79 84.0562 270.884 84.175C269.742 84.3249 268.436 84.8074 268.465 86.221C268.482 86.5589 268.568 86.8897 268.719 87.1927C268.87 87.4957 269.082 87.7643 269.342 87.9816C274.163 92.1925 279.804 95.3627 285.912 97.2931C287.268 97.7211 288.793 98.0753 290.069 97.4475C291.346 96.8197 291.893 94.767 290.7 93.9938Z"
        fill="#41ccad"
      />
      <path
        d="M318.985 161.277L275.583 160.61L274.248 150.614L278.254 127.955H312.308L318.985 161.277Z"
        fill="#FFB6B6"
      />
      <path
        d="M226.172 187.934H57.2397C53.1681 187.929 49.2645 186.313 46.3854 183.439C43.5063 180.566 41.8868 176.67 41.8822 172.606V75.9733C41.8868 71.9095 43.5063 68.0135 46.3854 65.1399C49.2645 62.2664 53.1681 60.65 57.2397 60.6454H226.172C230.244 60.65 234.148 62.2664 237.027 65.1399C239.906 68.0135 241.525 71.9095 241.53 75.9733V172.606C241.525 176.67 239.906 180.566 237.027 183.439C234.148 186.313 230.244 187.929 226.172 187.934Z"
        fill="white"
      />
      <path
        d="M226.172 187.934H57.2397C53.1681 187.929 49.2645 186.313 46.3854 183.439C43.5063 180.566 41.8868 176.67 41.8822 172.606V75.9733C41.8868 71.9095 43.5063 68.0135 46.3854 65.1399C49.2645 62.2664 53.1681 60.65 57.2397 60.6454H226.172C230.244 60.65 234.148 62.2664 237.027 65.1399C239.906 68.0135 241.525 71.9095 241.53 75.9733V172.606C241.525 176.67 239.906 180.566 237.027 183.439C234.148 186.313 230.244 187.929 226.172 187.934ZM57.2397 61.9782C53.5221 61.9824 49.958 63.4582 47.3292 66.0819C44.7005 68.7056 43.2218 72.2628 43.2176 75.9733V172.606C43.2219 176.316 44.7005 179.874 47.3293 182.497C49.958 185.121 53.5221 186.597 57.2397 186.601H226.172C229.89 186.597 233.454 185.121 236.083 182.497C238.712 179.874 240.19 176.316 240.195 172.606V75.9733C240.19 72.2628 238.712 68.7056 236.083 66.0819C233.454 63.4582 229.89 61.9824 226.172 61.9782H57.2397Z"
        fill="#E6E6E6"
      />
      <path
        d="M240.195 130.847H42.5493C42.3722 130.847 42.2024 130.777 42.0772 130.652C41.9519 130.527 41.8816 130.357 41.8816 130.18C41.8816 130.004 41.9519 129.834 42.0772 129.709C42.2024 129.584 42.3722 129.514 42.5493 129.514H240.195C240.372 129.514 240.542 129.584 240.667 129.709C240.792 129.834 240.863 130.004 240.863 130.18C240.863 130.357 240.792 130.527 240.667 130.652C240.542 130.777 240.372 130.847 240.195 130.847Z"
        fill="#E6E6E6"
      />
      <path
        d="M225.505 31.3223C228.823 31.3223 231.514 28.637 231.514 25.3244C231.514 22.0119 228.823 19.3265 225.505 19.3265C222.186 19.3265 219.495 22.0119 219.495 25.3244C219.495 28.637 222.186 31.3223 225.505 31.3223Z"
        fill="#F2F2F2"
      />
      <path
        d="M6.00946 126.822C9.3284 126.822 12.0189 124.137 12.0189 120.824C12.0189 117.512 9.3284 114.826 6.00946 114.826C2.69053 114.826 0 117.512 0 120.824C0 124.137 2.69053 126.822 6.00946 126.822Z"
        fill="#F2F2F2"
      />
      <path
        d="M129.537 229.453C132.856 229.453 135.547 226.767 135.547 223.455C135.547 220.142 132.856 217.457 129.537 217.457C126.218 217.457 123.528 220.142 123.528 223.455C123.528 226.767 126.218 229.453 129.537 229.453Z"
        fill="#F2F2F2"
      />
      <path
        d="M93.2439 160.144H72.3816C72.2045 160.144 72.0346 160.073 71.9094 159.949C71.7842 159.824 71.7139 159.654 71.7139 159.477C71.7139 159.301 71.7842 159.131 71.9094 159.006C72.0346 158.881 72.2045 158.811 72.3816 158.811H93.2439C93.421 158.811 93.5908 158.881 93.716 159.006C93.8412 159.131 93.9116 159.301 93.9116 159.477C93.9116 159.654 93.8412 159.824 93.716 159.949C93.5908 160.073 93.421 160.144 93.2439 160.144Z"
        fill="#CCCCCC"
      />
      <path
        d="M93.2439 170.807H72.3816C72.2045 170.807 72.0346 170.736 71.9094 170.611C71.7842 170.486 71.7139 170.317 71.7139 170.14C71.7139 169.963 71.7842 169.794 71.9094 169.669C72.0346 169.544 72.2045 169.474 72.3816 169.474H93.2439C93.421 169.474 93.5908 169.544 93.716 169.669C93.8412 169.794 93.9116 169.963 93.9116 170.14C93.9116 170.317 93.8412 170.486 93.716 170.611C93.5908 170.736 93.421 170.807 93.2439 170.807Z"
        fill="#CCCCCC"
      />
      <path
        d="M207.424 160.144H186.562C186.384 160.144 186.215 160.073 186.089 159.949C185.964 159.824 185.894 159.654 185.894 159.477C185.894 159.301 185.964 159.131 186.089 159.006C186.215 158.881 186.384 158.811 186.562 158.811H207.424C207.601 158.811 207.771 158.881 207.896 159.006C208.021 159.131 208.092 159.301 208.092 159.477C208.092 159.654 208.021 159.824 207.896 159.949C207.771 160.073 207.601 160.144 207.424 160.144Z"
        fill="#CCCCCC"
      />
      <path
        d="M207.424 170.807H186.562C186.384 170.807 186.215 170.736 186.089 170.611C185.964 170.486 185.894 170.317 185.894 170.14C185.894 169.963 185.964 169.794 186.089 169.669C186.215 169.544 186.384 169.474 186.562 169.474H207.424C207.601 169.474 207.771 169.544 207.896 169.669C208.021 169.794 208.092 169.963 208.092 170.14C208.092 170.317 208.021 170.486 207.896 170.611C207.771 170.736 207.601 170.807 207.424 170.807Z"
        fill="#CCCCCC"
      />
      <path
        d="M169.364 160.144H148.501C148.324 160.144 148.155 160.073 148.029 159.949C147.904 159.824 147.834 159.654 147.834 159.477C147.834 159.301 147.904 159.131 148.029 159.006C148.155 158.881 148.324 158.811 148.501 158.811H169.364C169.541 158.811 169.711 158.881 169.836 159.006C169.961 159.131 170.031 159.301 170.031 159.477C170.031 159.654 169.961 159.824 169.836 159.949C169.711 160.073 169.541 160.144 169.364 160.144Z"
        fill="#CCCCCC"
      />
      <path
        d="M169.364 170.807H148.501C148.324 170.807 148.155 170.736 148.029 170.611C147.904 170.486 147.834 170.317 147.834 170.14C147.834 169.963 147.904 169.794 148.029 169.669C148.155 169.544 148.324 169.474 148.501 169.474H169.364C169.541 169.474 169.711 169.544 169.836 169.669C169.961 169.794 170.031 169.963 170.031 170.14C170.031 170.317 169.961 170.486 169.836 170.611C169.711 170.736 169.541 170.807 169.364 170.807Z"
        fill="#CCCCCC"
      />
      <path
        d="M131.304 160.144H110.442C110.265 160.144 110.095 160.073 109.969 159.949C109.844 159.824 109.774 159.654 109.774 159.477C109.774 159.301 109.844 159.131 109.969 159.006C110.095 158.881 110.265 158.811 110.442 158.811H131.304C131.481 158.811 131.651 158.881 131.776 159.006C131.901 159.131 131.972 159.301 131.972 159.477C131.972 159.654 131.901 159.824 131.776 159.949C131.651 160.073 131.481 160.144 131.304 160.144Z"
        fill="#CCCCCC"
      />
      <path
        d="M131.304 170.807H110.442C110.265 170.807 110.095 170.736 109.969 170.611C109.844 170.486 109.774 170.317 109.774 170.14C109.774 169.963 109.844 169.794 109.969 169.669C110.095 169.544 110.265 169.474 110.442 169.474H131.304C131.481 169.474 131.651 169.544 131.776 169.669C131.901 169.794 131.972 169.963 131.972 170.14C131.972 170.317 131.901 170.486 131.776 170.611C131.651 170.736 131.481 170.807 131.304 170.807Z"
        fill="#CCCCCC"
      />
      <path
        d="M274.248 149.947L272.913 167.941L247.718 212.986C246.508 214.992 245.977 217.333 246.204 219.664C246.431 221.994 247.404 224.189 248.978 225.925L288.489 261.657C288.489 261.657 296.256 261.911 295.602 265.575C294.947 269.239 299.099 269.065 299.099 269.065L303.771 272.434L306.299 253.244C297.804 234.314 285.207 228.539 274.248 219.806C274.248 219.806 278.869 218.435 277.894 216.846C276.919 215.258 279.981 215.152 279.981 215.152C279.981 215.152 282.013 214.879 282.137 213.402C282.261 211.926 284.231 211.702 284.231 211.702L295.285 200.596L324.327 199.263C324.327 199.263 336.617 168.534 316.314 148.614L274.248 149.947Z"
        fill="#2F2E41"
      />
      <path
        d="M295.35 192.251L304.963 306.559L319.122 305.703L324.327 199.263L295.35 192.251Z"
        fill="#2F2E41"
      />
      <path
        d="M296.04 55.9108L312.248 55.0775L319.776 66.9499C319.776 66.9499 333.94 69.3134 332.959 85.9722C331.977 102.631 315.725 117.249 315.725 117.249L316.42 125.924L315.213 129.365L315.368 131.297L317.014 133.343L317.183 135.459L315.725 138.807L316.314 143.283C316.314 143.283 301.65 146.188 293.958 140.404C286.267 134.619 274.916 137.952 274.916 137.952L274.489 132.438L276.713 129.461L275.47 125.578L277.338 121.844L278.312 109.981C278.312 109.981 267.657 94.0049 279.889 81.9717L284.798 73.6423L290.29 66.9537L296.04 55.9108Z"
        fill="#41ccad"
      />
      <path
        d="M335.784 128.158L334.591 86.3631C334.535 84.5926 333.784 82.9149 332.5 81.6921C331.216 80.4693 329.502 79.7995 327.727 79.8272C326.809 79.8416 325.903 80.0424 325.066 80.4174C324.228 80.7924 323.475 81.3338 322.854 82.0085C322.233 82.6832 321.756 83.4772 321.452 84.342C321.148 85.2067 321.024 86.1242 321.087 87.0385L323.659 130.415L324.109 156.838C323.001 157.328 322.071 158.146 321.445 159.181C320.819 160.217 320.528 161.419 320.611 162.626C320.693 163.832 321.146 164.984 321.908 165.925C322.669 166.866 323.703 167.549 324.867 167.884C326.031 168.218 327.271 168.186 328.417 167.793C329.562 167.4 330.559 166.664 331.271 165.685C331.983 164.707 332.377 163.534 332.397 162.324C332.418 161.115 332.065 159.929 331.387 158.927L335.784 128.158Z"
        fill="#FFB6B6"
      />
      <path
        d="M338.682 94.7703C338.988 94.4598 339.184 94.0575 339.239 93.6252C339.294 93.1928 339.206 92.7544 338.987 92.3773C338.726 91.9068 338.619 91.3667 338.68 90.8324C338.693 90.7293 338.713 90.6271 338.739 90.5265C338.914 89.9243 338.94 89.2891 338.815 88.6747C338.691 88.0603 338.42 87.485 338.025 86.9976C336.703 85.4123 336.064 83.0122 335.788 80.8726C335.485 78.5314 335.306 76.1387 334.45 73.9377C333.217 70.7629 330.269 67.9335 326.245 69.2876C324.543 69.8901 323.101 71.0598 322.162 72.5996C320.156 75.7929 320.134 79.654 320.149 83.348L319.427 81.8883C319.513 85.9227 318.783 89.9329 317.278 93.6785C318.175 93.5048 318.81 94.7073 318.52 95.572C318.23 96.4367 317.429 97.0049 316.742 97.6064C315.877 98.3645 315.06 99.4906 315.872 100.649C316.074 100.921 316.33 101.148 316.624 101.316C316.918 101.484 317.244 101.59 317.581 101.626C323.934 102.451 330.389 101.955 336.541 100.17C337.907 99.7724 339.371 99.2208 340.082 97.9907C340.793 96.7606 340.105 94.7506 338.682 94.7703Z"
        fill="#41ccad"
      />
      <path
        d="M304.963 52.6482C313.445 52.6482 320.321 45.7856 320.321 37.3202C320.321 28.8548 313.445 21.9923 304.963 21.9923C296.482 21.9923 289.606 28.8548 289.606 37.3202C289.606 45.7856 296.482 52.6482 304.963 52.6482Z"
        fill="#FFB6B6"
      />
      <path
        d="M145.773 35.746C155.663 35.746 163.68 27.744 163.68 17.873C163.68 8.00201 155.663 0 145.773 0C135.883 0 127.865 8.00201 127.865 17.873C127.865 27.744 135.883 35.746 145.773 35.746Z"
        fill="#41ccad"
      />
      <path
        d="M145.143 25.0426C144.903 25.0426 144.666 24.9867 144.451 24.8794C144.236 24.7721 144.049 24.6163 143.905 24.4244L140.108 19.3715C139.985 19.2092 139.896 19.0244 139.845 18.8277C139.795 18.631 139.783 18.4262 139.812 18.225C139.84 18.0239 139.908 17.8304 140.012 17.6555C140.116 17.4807 140.253 17.328 140.416 17.2061C140.578 17.0842 140.764 16.9955 140.961 16.9452C141.158 16.8949 141.363 16.8839 141.565 16.9128C141.766 16.9417 141.96 17.01 142.135 17.1138C142.31 17.2175 142.463 17.3547 142.585 17.5175L145.069 20.8229L151.449 11.2714C151.677 10.9313 152.031 10.6954 152.433 10.6155C152.835 10.5357 153.253 10.6183 153.594 10.8453C153.935 11.0724 154.172 11.4253 154.253 11.8265C154.334 12.2278 154.252 12.6447 154.025 12.9857L146.431 24.3545C146.294 24.5601 146.109 24.7298 145.893 24.8495C145.676 24.9691 145.434 25.0352 145.186 25.0421L145.143 25.0426Z"
        fill="white"
      />
      <path
        d="M180.064 68.9254H103.348C101.479 68.9254 99.6866 68.1844 98.3651 66.8655C97.0437 65.5465 96.3013 63.7577 96.3013 61.8924C96.3013 60.0271 97.0437 58.2382 98.3651 56.9193C99.6866 55.6004 101.479 54.8594 103.348 54.8594H180.064C180.99 54.8585 181.907 55.0397 182.763 55.3928C183.619 55.7458 184.396 56.2637 185.051 56.9169C185.707 57.57 186.226 58.3457 186.581 59.1994C186.935 60.0531 187.118 60.9682 187.118 61.8924C187.118 62.8166 186.935 63.7317 186.581 64.5854C186.226 65.4391 185.707 66.2147 185.051 66.8679C184.396 67.5211 183.619 68.039 182.763 68.392C181.907 68.7451 180.99 68.9263 180.064 68.9254Z"
        fill="#41ccad"
      />
      <path
        d="M412.209 338.795L241.702 339C241.492 338.999 241.291 338.915 241.143 338.766C240.995 338.617 240.912 338.416 240.912 338.206C240.912 337.997 240.995 337.796 241.143 337.647C241.291 337.498 241.492 337.414 241.702 337.413L412.209 337.208C412.419 337.209 412.621 337.293 412.769 337.442C412.917 337.591 413 337.792 413 338.002C413 338.211 412.917 338.413 412.769 338.561C412.621 338.71 412.419 338.794 412.209 338.795Z"
        fill="#CACACA"
      />
      <path
        d="M324.327 33.3216V36.6538H311.039C311.174 36.0105 311.175 35.3464 311.04 34.703C310.906 34.0596 310.64 33.4509 310.258 32.9151C310.247 34.2192 309.922 35.5016 309.31 36.6538C301.627 38.9214 295.178 38.878 289.893 36.6538C289.109 36.6538 288.356 36.3427 287.801 35.7889C287.246 35.2352 286.935 34.4841 286.935 33.7009C286.935 23.4846 295.003 14.8761 305.237 14.6656C307.725 14.613 310.198 15.0567 312.512 15.9707C314.826 16.8846 316.934 18.2505 318.712 19.9881C320.49 21.7257 321.902 23.8001 322.867 26.0897C323.831 28.3793 324.327 30.838 324.327 33.3216V33.3216Z"
        fill="#2F2E41"
      />
      <path
        d="M148.049 90.6348H121.341C120.632 90.6348 119.953 90.354 119.452 89.854C118.951 89.3541 118.67 88.6761 118.67 87.9691C118.67 87.2621 118.951 86.584 119.452 86.0841C119.953 85.5842 120.632 85.3033 121.341 85.3033H148.049C148.758 85.3033 149.437 85.5842 149.938 86.0841C150.439 86.584 150.72 87.2621 150.72 87.9691C150.72 88.6761 150.439 89.3541 149.938 89.854C149.437 90.354 148.758 90.6348 148.049 90.6348Z"
        fill="#CCCCCC"
      />
      <path
        d="M154.727 147.481H128.018C127.309 147.481 126.63 147.201 126.129 146.701C125.628 146.201 125.347 145.523 125.347 144.816C125.347 144.109 125.628 143.431 126.129 142.931C126.63 142.431 127.309 142.15 128.018 142.15H154.727C155.435 142.15 156.114 142.431 156.615 142.931C157.116 143.431 157.397 144.109 157.397 144.816C157.397 145.523 157.116 146.201 156.615 146.701C156.114 147.201 155.435 147.481 154.727 147.481Z"
        fill="#CCCCCC"
      />
      <path
        d="M205.473 105.296H120.673C119.965 105.296 119.285 105.015 118.784 104.516C118.283 104.016 118.002 103.338 118.002 102.631C118.002 101.924 118.283 101.246 118.784 100.746C119.285 100.246 119.965 99.9649 120.673 99.9649H205.473C206.182 99.9649 206.861 100.246 207.362 100.746C207.863 101.246 208.144 101.924 208.144 102.631C208.144 103.338 207.863 104.016 207.362 104.516C206.861 105.015 206.182 105.296 205.473 105.296Z"
        fill="#CCCCCC"
      />
      <path
        d="M89.6213 113.173C99.5114 113.173 107.529 105.171 107.529 95.2998C107.529 85.4289 99.5114 77.4268 89.6213 77.4268C79.7313 77.4268 71.7139 85.4289 71.7139 95.2998C71.7139 105.171 79.7313 113.173 89.6213 113.173Z"
        fill="#E6E6E6"
      />
    </g>
    <defs>
      <clipPath id="clip0_32_604">
        <rect width="413" height="339" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
