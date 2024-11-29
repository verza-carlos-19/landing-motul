import React from "react";
import { HeaderBackground, HeaderBox, HeaderLogo, RightBoxCartUser } from "./HeaderStyles";
import Navbar from "../Navbar/Navbar";
import ModalCart from "../ModalCart/ModalCart";
import { BsCart3 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toggleHiddenCart } from "../../Redux/Cart/CartSlice";
import ModalCheckOut from "../ModalCart/ModalCheckOut/ModalCheckOut";
import { Link } from "react-router-dom";
import ButtonLogin from "../UI/ButtonLogin/ButtonLogin";
import User from "../UI/UserIcon/UserIcon";
import { toggleHiddenModal } from "../../Redux/User/UserSlice";
import UserModal from "../UI/UserIcon/UserModal/UserModal";
import { CgLayoutGrid } from "react-icons/cg";
import { user } from "../../USERSVALIDATION/UserValidation";
function Header() {
  const dispatch = useDispatch();
  const {user} = useSelector((state)=>state.user)
  return (
    <>
      <HeaderBackground>
        <HeaderBox>
          <HeaderLogo>
        <Link to="/">
            <img
              src="https://res.cloudinary.com/ds1lnxkfc/image/upload/v1704469659/motul_u2bxul.svg"
              alt="logo"
            />
          </Link>
          </HeaderLogo>
          <Navbar />
          {
            user ? <RightBoxCartUser>
            <User />
            <BsCart3
            className="cart"
            size={"30px"}
            onClick={() => dispatch(toggleHiddenCart())}
            />
            </RightBoxCartUser>
           : <ButtonLogin msg={"iniciar sesion"} trigger={true}/>

          }
            <UserModal/> 
          <ModalCart />
          <ModalCheckOut />
        </HeaderBox>
      </HeaderBackground>
    </>
  );
}

export default Header;
