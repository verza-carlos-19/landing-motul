import React from "react";
import { Link } from "react-router-dom";
import { ButtonStyle, ButtonStyled } from "./ButtonSpecialStyles";
function ButtonSpecial() {
  return (
    <>
      <Link to="/contacto">
        <ButtonStyled>CONVIERTETE EN PROVEEDOR</ButtonStyled>
      </Link>
    </>
  );
}

export default ButtonSpecial;
