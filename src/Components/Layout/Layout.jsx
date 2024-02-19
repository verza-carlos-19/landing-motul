import React from "react";
import { Outlet } from "react-router-dom";
import { LayoutBox } from "./LayoutStyles";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
function Layout({ children }) {
  return (
    <>
      <Header />
      <LayoutBox>
        <Outlet />
      </LayoutBox>
      <Footer />
    </>
  );
}

export default Layout;
