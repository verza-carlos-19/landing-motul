import React from "react";
import { ModalBox } from "./ModalConfirmationStyles";

function Modal({message}) {
    return <>
    <ModalBox>
        <p>{message}</p>
    </ModalBox>
    </>
}

export default Modal;