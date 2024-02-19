import React from "react";
import { ListItem, NavbarBox, NavbarList } from "./NavbarStyles";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <NavbarBox>
        <NavbarList>
          <Link to="/">
            <ListItem>Inicio</ListItem>
          </Link>
          <Link to="/productos">
            <ListItem>Productos</ListItem>
          </Link>
          <Link to="/nosotros">
            <ListItem>nosotros</ListItem>
          </Link>
          <Link to="/contacto">
            <ListItem>contacto</ListItem>
          </Link>
        </NavbarList>
      </NavbarBox>
    </>
  );
}

export default Navbar;
