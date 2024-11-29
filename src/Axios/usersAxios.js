import axios from "axios";
import { BASE_URL_USERS } from "../utils/Constants"; // Ajusta BASE_URL_USERS según tu entorno

// Registrar un nuevo usuario
export const registerUser = async (name, email, password) => {
  try {


    
    const response = await axios.post(`${BASE_URL_USERS}/register`, {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error(error.response.data.message || "error desconocido");
    // return error
     throw error.response.data.message;
  }
};

// Iniciar sesión
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL_USERS}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error.response.data.message || "error desconocido";
  }
};

// Verificar correo electrónico
export const verifyUser = async (email, code) => {
  try {
    const response = await axios.post(`${BASE_URL_USERS}/verify-email`, {
      email,
      code,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error.response.data.message || "error desconocido";
  }
};

// Obtener todos los usuarios (solo para administradores)
export const getAllUsers = async () => {
  try {
    const jwtToken = localStorage.getItem("jwtToken");
    const response = await axios.get(`${BASE_URL_USERS}/users`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener todos los usuarios:", error.response?.data || error);
    throw error;
  }
};

// Obtener todos los clientes (solo para administradores)
export const getUserClients = async () => {
  try {
    const jwtToken = localStorage.getItem("jwtToken");
    const response = await axios.get(`${BASE_URL_USERS}/client`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener los clientes:", error.response?.data || error);
    throw error;
  }
};

// Obtener todos los administradores (solo para administradores)
export const getUserAdmins = async () => {
  try {
    const jwtToken = localStorage.getItem("jwtToken");
    const response = await axios.get(`${BASE_URL_USERS}/admin`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener los administradores:", error.response?.data || error);
    throw error;
  }
};

// Eliminar un usuario por ID (solo para administradores)
export const deleteUserById = async (id) => {
  try {
    const jwtToken = localStorage.getItem("jwtToken");
    const response = await axios.delete(`${BASE_URL_USERS}/users/${id}`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al eliminar usuario:", error.response?.data || error);
    throw error;
  }
};
