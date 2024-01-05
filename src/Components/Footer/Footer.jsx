import React from "react";
import { FooterBottomBox, FooterBox, FooterTopBox } from "./FooterStyles";

function Footer() {
  return (
    <>
      <FooterBox>
        <FooterTopBox>
          <img
            src="https://res.cloudinary.com/ds1lnxkfc/image/upload/v1704469659/motul_u2bxul.svg"
            alt="logo"
          />
        </FooterTopBox>
        <FooterBottomBox>
          <p>© 2024. Todos los derechos reservados.</p>
        </FooterBottomBox>
      </FooterBox>
    </>
  );
}

export default Footer;
