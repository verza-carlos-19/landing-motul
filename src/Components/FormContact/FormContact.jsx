import React, { useState } from "react";

import Input from "../UI/Input/Input";

import { useFormik } from "formik";
import * as Yup from "yup";


import { Form, FormBox, FormTitle } from "./FormContactStyles";
import Submit from "../UI/Submit/Submit";
import TextAreaInput from "../UI/InputTextArea/InputTextArea";
import ModalAlert, { createModal } from "../ModalAlert/ModalAlert";




const validationSchema = Yup.object({
  name: Yup.string().trim().required("Campo Requerido"),
  surname: Yup.string().trim().required("Campo Requerido"),
  email: Yup.string()
    .email("Correo electrónico inváilido")
    .required("Campo Requerido"),
  asunt: Yup.string().max(255, "Máximo de 255 caracteres").notRequired(),
});



function FormContact() {
  const  [modal, setModal] = useState(false);
  const changeStateModal = () => {
    setModal(true);
    setInterval(() => {
      setModal(false);
    }, 5000);
  }

  const { getFieldProps, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      asunt: "",
    },  
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log({ values });
      console.log("ok");
      // createModal("solicitud enviada");
      // setModal(true);
      resetForm();
      changeStateModal();   
    },  
  });  
  return (
    <FormBox>
      <FormTitle>Envia Tu Solicitud</FormTitle>
      <Form>
        <Input
          name="name"
          label="Nombre"
          type="text"
          isError={touched.name && errors.name}
          {...getFieldProps("name")}
        />
        <Input
          name="surname"
          label="Apellido"
          type="text"
          isError={touched.surname && errors.surname}
          {...getFieldProps("surname")}
        />
        <Input
          name="email"
          label="Correo Electronico"
          type="email"
          isError={touched.email && errors.email}
          {...getFieldProps("email")}
        />

        <TextAreaInput
          name="comments"
          label="Asunto"
          isError={touched.comments && errors.comments}
          {...getFieldProps("asunt")}
        />
        <Submit onSubmit={handleSubmit} />

      </Form>
      {modal ? <ModalAlert message={"Solicitud Enviada"}/> :  null}
      {/* <ModalAlert message={"Solicitud Enviada"}/> */}
    </FormBox>
  );
}

export default FormContact;
