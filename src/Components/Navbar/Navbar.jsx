import React from "react";
import { ListItem, NavbarBox, NavbarList } from "./NavbarStyles";

function Navbar() {
  return (
    <>
      <NavbarBox>
        <NavbarList>
          <ListItem>Inicio</ListItem>
          <ListItem>Productos</ListItem>
        </NavbarList>
      </NavbarBox>
    </>
  );
}

export default Navbar;
