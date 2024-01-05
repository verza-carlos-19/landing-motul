import React from "react";
import { HeaderBackground, HeaderBox, HeaderLogo } from "./HeaderStyles";
import Navbar from "../Navbar/Navbar";

function Header() {
  return (
    <>
      <HeaderBackground>
        <HeaderBox>
          <HeaderLogo>
            <img
              src="https://res.cloudinary.com/ds1lnxkfc/image/upload/v1704469659/motul_u2bxul.svg"
              alt="logo"
            />
          </HeaderLogo>
          <Navbar />
        </HeaderBox>
      </HeaderBackground>
    </>
  );
}

export default Header;
