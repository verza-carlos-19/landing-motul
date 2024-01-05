import React from "react";
import { FooterBottomBox, FooterBox, FooterTopBox } from "./FooterStyles";

function Footer() {
  return (
    <>
      <FooterBox>
        <FooterTopBox>
          <img src="motul.svg" alt="logo" />
        </FooterTopBox>
        <FooterBottomBox>
          <p>© 2024. Todos los derechos reservados.</p>
        </FooterBottomBox>
      </FooterBox>
    </>
  );
}

export default Footer;
