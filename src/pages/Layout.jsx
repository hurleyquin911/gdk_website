import React from "react";
import Header from "../components/Header";
import PageTransition from "../components/PageTransition";
import SideKontak from "../components/SideKontak";
import StairTransition from "../components/StairTransition";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <StairTransition />
      <SideKontak />
      <PageTransition>{children}</PageTransition>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
