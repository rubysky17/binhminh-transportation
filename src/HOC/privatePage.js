import React from "react";

import { Route } from "react-router-dom";

export const PrivatePage = ({ Component, ...restProps }) => {
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <>
            <Component {...propsRoute} />
            {/* <Navbar /> */}
          </>
        );
      }}
    />
  );
};
