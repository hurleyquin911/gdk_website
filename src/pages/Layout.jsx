import React from "react";
import Header from "../components/Header";
import PageTransition from "../components/PageTransition";
import SideKontak from "../components/SideKontak";
import StairTransition from "../components/StairTransition";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <StairTransition />
      <SideKontak />
      <PageTransition>{children}</PageTransition>
    </React.Fragment>
  );
};

export default Layout;
