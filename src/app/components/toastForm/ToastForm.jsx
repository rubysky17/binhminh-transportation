import React from "react";
import { BsCheck } from "react-icons/bs";
import useTranslation from "hooks/useTranslate/useTranslation";

import "./ToastForm.scss";

const ToastForm = () => {
  const { t } = useTranslation();
  return (
    <div id="toast">
      <div className="toast-form">
        <div className="toast-icon__wrap">
          <BsCheck className="toast-icon"></BsCheck>
        </div>
        <div className="toast-content">
          <span className="toast-title">{t("Success")}</span>
          <span className="toast-text">{t("We will contact you shortly")}</span>
        </div>
      </div>
    </div>
  );
};

export default ToastForm;
