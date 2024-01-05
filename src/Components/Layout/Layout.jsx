import React from "react";
import { LayoutBox } from "./LayoutStyles";

function Layout({ children }) {
  return (
    <>
      <LayoutBox>{children}</LayoutBox>
    </>
  );
}

export default Layout;
