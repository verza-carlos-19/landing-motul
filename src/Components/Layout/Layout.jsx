import React from "react";
import { Outlet } from "react-router-dom";
import { LayoutBox } from "./LayoutStyles";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ModalCart from "../ModalCart/ModalCart";
import ModalCheckOut from "../ModalCart/ModalCheckOut/ModalCheckOut";
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
