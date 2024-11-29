import axios from 'axios';
import { BASE_URL_PRODUCTS } from '../utils/Constants';

// Crear Producto
export const createProduct = async (nombre, precio, categoria, image) => {
  try {
    const jwtToken = localStorage.getItem('jwtToken');
    console.log(jwtToken)
    console.log(nombre)
    console.log(precio)
    console.log(categoria)
    console.log(image)
     const product = await axios.post(
       `${BASE_URL_PRODUCTS}/create`, 
       {
         name: nombre,
         price: Number(precio),
         img: image,
         category: categoria
         },
       {
         headers: {
            'Authorization': `Bearer ${jwtToken}`,
          //  'Authorization': `Bearer ${"bro"}`,
           'Content-Type': 'application/json',
         },
       }
     );
     return product.data; // Devuelve la respuesta de la API
    //  return; // Devuelve la respuesta de la API
  } catch (error) {
    alert(error.response.data.errors[0]?.msg || "Error al crear el producto");
    throw error;
  }
};

// Obtener todos los productos
export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL_PRODUCTS}/all`);
    return response.data; // Devuelve todos los productos
  } catch (error) {
    alert(error.response.data.errors[0]?.msg || "Error al obtener productos");
    throw error;
  }
};
export const getThreeProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL_PRODUCTS}/all`);
    const products = response.data.slice(0,4); // Devuelve todos los productos
    return products; // Devuelve todos los productos
  } catch (error) {
    alert(error.response.data.errors[0]?.msg || "Error al obtener productos");
    throw error;
  }
};

// Obtener un producto por ID
export const getOneProducts = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL_PRODUCTS}/${id}`);
    return response.data; // Devuelve el producto específico
  } catch (error) {
    alert(error.response.data.errors[0]?.msg || "Error al obtener el producto");
    throw error;
  }
};

// Actualizar un producto por ID
export const updateProductById = async (id, updatedProduct) => {
  try {
    const jwtToken = localStorage.getItem('jwtToken');
    const response = await axios.put(
      `${BASE_URL_PRODUCTS}/${id}`,
      updatedProduct,
      {
        headers: {
          'Authorization': `Bearer ${jwtToken}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data; // Devuelve el producto actualizado
  } catch (error) {
    alert(error.response.data.errors[0]?.msg || "Error al actualizar el producto");
    throw error;
  }
};

// Eliminar un producto por ID
export const deleteProductById = async (id) => {
  try {
    const jwtToken = localStorage.getItem('jwtToken');
    const response = await axios.delete(
      `${BASE_URL_PRODUCTS}/${id}`,
      {
        headers: {
          'Authorization': `Bearer ${jwtToken}`,
          'Content-Type': 'application/json',
        },
      }
    );
    alert("producto borrado");
    return response.data; // Devuelve una confirmación de eliminación
  } catch (error) {
    alert(error.response.data.errors[0]?.msg || "Error al eliminar el producto");
    throw error;
  }
};
