import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormBox, Title, Input, Button, Error, FormStyled, ContentBox, RegisterSpan, RegisterSpanButton } from "./FormLoginStyles";
import { loginUser } from "../../Axios/usersAxios";
import { useDispatch } from "react-redux";
import { setUser } from "../../Redux/User/UserSlice"; // Acción para almacenar el usuario
import { Link, useNavigate } from "react-router-dom";
import Register from "../../pages/Login/Register";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleLogin = async (values) => {
    try {
      const response = await loginUser(values.email, values.password); 
      localStorage.setItem("jwtToken", response.token); // Guarda el token en localStorage
      dispatch(setUser(response.user)); // Almacena el usuario en Redux
      navigate("/")
    } catch (error) {
      alert("Error al iniciar sesión");
    }
  };

  return (
    <ContentBox>

    <FormBox>
      <Title>Iniciar Sesión</Title>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string().email("Correo inválido").required("Requerido"),
          password: Yup.string().required("Requerido"),
        })}
        onSubmit={handleLogin}
      >
        {({ getFieldProps, errors, touched }) => (
          <FormStyled as={Form}>
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
            {touched.password && errors.password && (
              <Error>{errors.password}</Error>
            )}

            <Button type="submit">Iniciar Sesión</Button>
          </FormStyled>
        )}
      </Formik>
      <RegisterSpan> ¿No tienes cuenta? <Link to="/register"><RegisterSpanButton>Registrate</RegisterSpanButton></Link></RegisterSpan>
    </FormBox>
        </ContentBox>
  );
};

export default LoginForm;
