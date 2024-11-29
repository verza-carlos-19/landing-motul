import React from "react";
import { ButtonLog } from "./ButtonLoginStyles";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, toggleHiddenModal } from "../../../Redux/User/UserSlice";
import { CgLayoutGrid } from "react-icons/cg";
import { user } from "../../../USERSVALIDATION/UserValidation";
import { Link } from "react-router-dom";


const ButtonLogin = ({msg, trigger, closeSessionTrigger}) => {
  const {user} = useSelector((state)=> state.user)
  const dispatch = useDispatch()
  return (<>
  {
    trigger ? 
       <ButtonLog onClick={() => dispatch(toggleHiddenModal()) }>{msg}</ButtonLog> 
     :
      closeSessionTrigger ? 
         <ButtonLog onClick={() => dispatch(logoutUser())}>{msg}</ButtonLog> 
            :
            <Link to={"/login"}>
            <ButtonLog >{msg}</ButtonLog>
            </Link>
  }  
  </>

)};
  export default ButtonLogin;