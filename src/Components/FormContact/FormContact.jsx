import React from "react";
import {
  ButtonStyle,
  FormContactBox,
  FormContactContainer,
  FormContactTitle,
  InputStyle,
} from "./FormContactStyles";

function FormContact() {
  return (
    <FormContactContainer>
      <FormContactBox>
        <FormContactTitle>Contactanos</FormContactTitle>
        <InputStyle type="text" placeholder="Nombre" />
        <InputStyle type="text" placeholder="Apellido" />
        <InputStyle type="email" placeholder="Email" />
        <InputStyle type="text" placeholder="Asunto" />
        <ButtonStyle>Enviar</ButtonStyle>
      </FormContactBox>
    </FormContactContainer>
  );
}

export default FormContact;
