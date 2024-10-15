import React from "react";
import { ModalAlertBox } from "./ModalAlertStyles";

export function createModal(msg){
    return <ModalAlert message={msg}/>
}





export default function ModalAlert({ message }) {
    return<>
    <ModalAlertBox><p>
        {message}
        </p>
        </ModalAlertBox>
    </>
}

