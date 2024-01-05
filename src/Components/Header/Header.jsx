import React from "react";
import { HeaderBackground, HeaderBox, HeaderLogo } from "./HeaderStyles";
import Navbar from "../Navbar/Navbar";

function Header() {
  return (
    <>
      <HeaderBackground>
        <HeaderBox>
          <HeaderLogo>
            <img src="./src/imgs/motul.svg" alt="logo" />
          </HeaderLogo>
          <Navbar />
        </HeaderBox>
      </HeaderBackground>
    </>
  );
}

export default Header;
