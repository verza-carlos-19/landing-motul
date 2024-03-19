import React from "react";
import { HeaderBackground, HeaderBox, HeaderLogo } from "./HeaderStyles";
import Navbar from "../Navbar/Navbar";
import ModalCart from "../ModalCart/ModalCart";
import { BsCart3 } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { toggleHiddenCart } from "../../Redux/Cart/CartSlice";
import ModalCheckOut from "../ModalCart/ModalCheckOut/ModalCheckOut";
function Header() {
  const dispatch = useDispatch();
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
          <BsCart3
            className="cart"
            size={"30px"}
            onClick={() => dispatch(toggleHiddenCart())}
          />

          <ModalCart />
          <ModalCheckOut />
        </HeaderBox>
      </HeaderBackground>
    </>
  );
}

export default Header;
