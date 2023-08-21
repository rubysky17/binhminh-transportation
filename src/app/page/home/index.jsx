import React, { Fragment } from "react";

import IntroService from "./components/IntroService";
import BannerBlock from "./components/banners";
import ServiceComponent from "app/components/services";
import GridPicture from "./components/pictures";

import "./Home.scss";

function Home() {
  return (
    <Fragment>
      <div className="content">
        <BannerBlock />

        <div className="container">
          <IntroService />
        </div>

        <div className="container">
          <ServiceComponent />
        </div>

        <div className="container">
          <GridPicture />
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
