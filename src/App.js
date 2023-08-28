import React from "react";
import { Switch, Route } from "react-router-dom";
import Products from "app/page/products/product";

import { useEffect } from "react";

import Home from "app/page/home";
import ProductDetail from "./app/page/productDetail/productDetail";
import { Contact } from "app/page/contact";
import ScrollToTop from "app/page/utils/ScrollToTop";
import NotFound from "app/page/notFound/NotFound";
import LoginPage from "app/page/login/login";
import ServicePage from "app/page/service";
import Form from "app/page/common/form";
import { PublicPage } from "HOC/publicPage";
import { PrivatePage } from "HOC/privatePage";
import Admin from "app/page/admin";
import { useLocalStorage } from "hooks/useStorage/useStorage";

function App() {
  const [language, setLanguage] = useLocalStorage("language");

  useEffect(() => {
    // ! Kiểm tra first load page là ngon ngữ gì
    // * undefined => mặc định 'vi'
    if (typeof language === "undefined" || !language) {
      setLanguage("vi");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <ScrollToTop />

      <Switch>
        {/* Trang Public */}
        <PublicPage path="/" exact Component={Home} />
        <PublicPage path="/gioi-thieu" exact Component={Contact} />
        <PublicPage path="/form" exact Component={Form} />
        <PublicPage path="/lien-he" exact Component={ProductDetail} />
        <PublicPage path="/dich-vu" exact Component={ServicePage} />
        <PublicPage path="/dang-nhap" exact Component={LoginPage} />
        <PublicPage path="/dich-vu/:categoryId" Component={Products} />

        {/* Trang admin */}
        <PrivatePage path="/quan-tri" component={Admin} />

        {/* Nếu tất cả các path trên không đủng nhảy vào not found page */}
        <Route path="*" component={NotFound} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
