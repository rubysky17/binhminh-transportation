import React from "react";
import ServiceComponent from "app/components/services";

import "./styles.scss";

export default function ServicePage() {
  return (
    <div className="padding-header">
      <div className="container ">
        <ServiceComponent />
      </div>
    </div>
  );
}
