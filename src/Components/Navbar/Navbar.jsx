import React, { useContext } from "react";
import {
  BurgerClose,
  BurgerOpen,
  ListItem,
  NavbarBox,
  NavbarBoxRes,
  NavbarList,
} from "./NavbarStyles";
import { Link } from "react-router-dom";
import ThemeContext from "../../context/context";

function Navbar() {
  const { tema, handleTheme } = useContext(ThemeContext);
  return (
    <>
      <NavbarBoxRes style={{ translate: tema.translate }}>
        <BurgerOpen style={{ opacity: tema.opacity }} onClick={handleTheme}>
          <i className="bar "></i>
          <i className="bar "></i>
          <i className="bar "></i>
        </BurgerOpen>
        <BurgerClose
          onClick={handleTheme}
          style={{ opacity: tema.opacityClose }}
        >
          <i className="bar leftBar"></i>
          <i className="bar rightBar"></i>
        </BurgerClose>
        <NavbarList>
          <Link to="/">
            <ListItem onClick={handleTheme}>Inicio</ListItem>
          </Link>
          <Link to="/productos">
            <ListItem onClick={handleTheme}>Productos</ListItem>
          </Link>
          <Link to="/nosotros">
            <ListItem onClick={handleTheme}>nosotros</ListItem>
          </Link>
          <Link to="/contacto">
            <ListItem onClick={handleTheme}>contacto</ListItem>
          </Link>
        </NavbarList>
      </NavbarBoxRes>
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
