import React from "react";
import { IconBox, NameUser, UserBox, UserBoxAdmin } from "./UserIconStyles";
import { toggleHiddenModal } from "../../../Redux/User/UserSlice";
import { useDispatch, useSelector } from "react-redux";



const User = ({name, type}) => {
    const dispatch = useDispatch()
    const {user} = useSelector((state)=> state.user)
  return (
    <>
    {user.isAdmin ? 
    <UserBoxAdmin onClick={() => dispatch(toggleHiddenModal())}>
        <NameUser>{user.name}</NameUser>
        <IconBox><img src="https://res.cloudinary.com/ds1lnxkfc/image/upload/v1731079949/g8_ghxskw.png" alt="UserIcon"  /></IconBox>
    </UserBoxAdmin>
    :
    <UserBox onClick={ () => dispatch(toggleHiddenModal())}>
        <NameUser >{user.name}</NameUser>
        <IconBox ><img src="https://res.cloudinary.com/ds1lnxkfc/image/upload/v1731079949/g8_ghxskw.png" alt="UserIcon"  /></IconBox>
    </UserBox>
}
    </>
  )}
  export default (User);