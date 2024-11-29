import React from "react";
import { ButtonBorrar, ButtonEdit } from "./ButtonProdsAdminStyles";
// import { getOneProducts } from "../../../Axios/productsAxios";
import { useDispatch, useSelector } from "react-redux";
import { toggleHiddenModal } from "../../../Redux/ModalProduct/ModalProductSlice";
import { deleteProductById } from "../../../Axios/productsAxios";



const ButtonProdsAdmin = ({isEditer, id, triggerChange}) => {
  const dispatch = useDispatch()
  const {modal} = useSelector((state)=> state.modalProduct)
    return (<>
  {
    isEditer ? <ButtonEdit onClick={()=> {dispatch(toggleHiddenModal(id))
      // console.log(isEditer)
      
      console.log(modal)
    }}>editar</ButtonEdit> :<ButtonBorrar onClick={()=> {deleteProductById(id)
      triggerChange()
    } }>borrar</ButtonBorrar>
  }  
  </>

)};




  export default ButtonProdsAdmin;