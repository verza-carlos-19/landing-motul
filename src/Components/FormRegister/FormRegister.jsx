import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  FormBox,
  Title,
  Input,
  Button,
  Error,
  FormStyled,
  ModalOverlay,
  ModalContent,
  ContentBox,
  RegisterSpan,
  RegisterSpanButton,
} from "./FormRegisterStyles"; // Usa los estilos previamente creados
import { registerUser, verifyUser } from "../../Axios/usersAxios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../Redux/User/UserSlice"; // Acción para almacenar el usuario
import { Link, useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const {user} = useSelector((state)=> state.user)
  const [userEmail, setUserEmail] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleRegister = async (values) => {
    try {
      
      const response = await registerUser(values.name, values.email, values.password);
      dispatch(setUser({
        name: values.name,
        email: values.email,
      })); // Almacena el usuario en Redux
      setUserEmail(values.email); // Guarda el ID del usuario para la verificación
      //   console.log(user)
      setModalOpen(true); // Abre el modal para verificar el código
    } catch (error) {
      alert(error);
      setModalOpen(false); // Abre el modal para verificar el código
    }
  };

  const handleVerifyCode = async (code) => {
    try {
      const response = await verifyUser(userEmail, code);
      dispatch(setUser(response));
    //   alert("Verificación exitosa");
      setModalOpen(false); // Cierra el modal después de la verificación
      navigate('/');
    } catch (error) {
      alert("Código inválido");
    }
  };

  return (
    <>
    <ContentBox>

      <FormBox>
        <Title>Registrar</Title>
        <Formik
          initialValues={{
              name: "",
              email: "",
              password: "",
            }}
            validationSchema={Yup.object({
                name: Yup.string().required("Requerido"),
                email: Yup.string().email("Correo inválido").required("Requerido"),
                password: Yup.string().min(6, "Mínimo 6 caracteres").required("Requerido"),
            })}
            onSubmit={handleRegister}
            >
          {({ getFieldProps, errors, touched }) => (
              <FormStyled as={Form}>
              <Input
                type="text"
                placeholder="Nombre"
                {...getFieldProps("name")}
              />
              {touched.name && errors.name && <Error>{errors.name}</Error>}

              <Input
                type="email"
                placeholder="Correo Electrónico"
                {...getFieldProps("email")}
                />
              {touched.email && errors.email && <Error>{errors.email}</Error>}

              <Input
                type="password"
                placeholder="Contraseña"
                {...getFieldProps("password")}
                />
              {touched.password && errors.password && <Error>{errors.password}</Error>}

              <Button type="submit">Registrar</Button>
            </FormStyled>
          )}
        </Formik>
        <RegisterSpan>si ya tienes una cuenta, <Link to="/login"><RegisterSpanButton>inicia sesión</RegisterSpanButton></Link></RegisterSpan>
      </FormBox>

      {/* Modal para verificar código */}
      {isModalOpen && (
          <ModalOverlay>
          <ModalContent>
            <h3>Verificar Código</h3>
            <Formik
              initialValues={{ code: "" }}
              validationSchema={Yup.object({
                  code: Yup.string().required("Requerido"),
                })}
                onSubmit={(values) => handleVerifyCode(values.code)}
                >
              {({ getFieldProps }) => (
                <Form>
                  <Input
                    type="text"
                    placeholder="Código de Verificación"
                    {...getFieldProps("code")}
                    />
                  <Button type="submit">Verificar</Button>
                </Form>
              )}
            </Formik>
          </ModalContent>
        </ModalOverlay>
      )}
      </ContentBox>
    </>
  );
};

export default RegisterForm;