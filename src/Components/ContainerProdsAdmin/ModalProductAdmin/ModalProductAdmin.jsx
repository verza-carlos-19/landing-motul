
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getOneProducts, updateProductById } from "../../../Axios/productsAxios"; // Importa tu función de actualización
// import { 
//   ButtonUpdate,
//   Category, 
//   FormBox, 
//   ImageBox, 
//   ModalBox, 
//   Price, 
//   Title, 
//   VisualProductBox 
// } from "./ModalProductAdminStyles";
// import { toggleHiddenModal } from "../../../Redux/ModalProduct/ModalProductSlice";
// import { GrContract } from "react-icons/gr";
// import UpdateProductForm from "../../FormUpdateProducts/FormUpdateProduct";

// function ModalProductAdmin() {
//   const { modal, id } = useSelector((state) => state.modalProduct);
//   const dispatch = useDispatch();

//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       if (!modal || !id) return;

//       setLoading(true);
//       setError(null);

//       try {
//         const productData = await getOneProducts(id);
//         setProduct(productData);
//       } catch (err) {
//         setError("Error al cargar el producto");
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id, modal]);

//   const handleCloseModal = () => {
//     dispatch(toggleHiddenModal());
//     setProduct(null);
//     setError(null);
//   };

//   const handleUpdateProduct = async (updatedProduct) => {
//     try {
//        await updateProductById(product.id, updatedProduct);
//       console.log(updatedProduct);
//       alert("Producto actualizado con éxito");
//       setProduct(updatedProduct); // Actualiza la vista con el producto actualizado
//     } catch (err) {
//       console.error("Error al actualizar el producto:", err);
//       alert("Error al actualizar el producto");
//     }
//   };

//   if (!modal) return null;

//   return (
//     <ModalBox>
//       {loading ? (
//         <p>Cargando producto...</p>
//       ) : error ? (
//         <p className="error">{error}</p>
//       ) : product ? (
//         <>
//           <VisualProductBox>
//             <Title>{product.name}</Title>
//             <ImageBox>
//               <img src={product.img} alt={product.name} />
//             </ImageBox>
//             <Price>Precio: ${product.price}</Price>
//             <Category>Categoría: {product.category}</Category>
//           </VisualProductBox>

//           {/* Formulario de actualización */}
//           <FormBox>
//             <UpdateProductForm
//               product={product}
//               onSubmit={handleUpdateProduct} // Llama a la función para actualizar
//             />
//           </FormBox>
//         </>
//       ) : (
//         <p>No se encontró el producto</p>
//       )}

//       <GrContract onClick={handleCloseModal} />
//     </ModalBox>
//   );
// }

// export default ModalProductAdmin;


import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneProducts, updateProductById, createProduct } from "../../../Axios/productsAxios";
import { 
  ButtonUpdate, 
  Category, 
  FormBox, 
  ImageBox, 
  ModalBox, 
  Price, 
  Title, 
  VisualProductBox 
} from "./ModalProductAdminStyles";
import { toggleHiddenModal } from "../../../Redux/ModalProduct/ModalProductSlice";
import { GrContract } from "react-icons/gr";
import UpdateProductForm from "../../FormUpdateProducts/FormUpdateProduct";

function ModalProductAdmin({onProductChange}) {
  const { modal, id } = useSelector((state) => state.modalProduct);
  const dispatch = useDispatch();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isNewProduct, setIsNewProduct] = useState(false); // Nuevo estado para controlar si es un producto nuevo

  useEffect(() => {
    const fetchProduct = async () => {
      if (!modal) return;

      setLoading(true);
      setError(null);

      if (id) {
        try {
          const productData = await getOneProducts(id);
          setProduct(productData);
          setIsNewProduct(false); // No es un producto nuevo
        } catch (err) {
          setError("Error al cargar el producto");
          console.error(err);
        } finally {
          setLoading(false);
        }
      } else {
        setProduct({ name: "", price: "", category: "aerosol", img: "" }); // Valores iniciales para crear producto
        setIsNewProduct(true); // Es un producto nuevo
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, modal]);

  const handleCloseModal = () => {
    dispatch(toggleHiddenModal());
    setProduct({});
    setError(null);
    setIsNewProduct(false);
  };

  const handleUpdateProduct = async (updatedProduct) => {
    try {
      if (isNewProduct) {
        console.log(updatedProduct.name, Number(updatedProduct.price), updatedProduct.category, updatedProduct.img)
         await createProduct(updatedProduct.name, updatedProduct.price, updatedProduct.category, updatedProduct.img);
        alert("Producto creado con éxito");
      } else {
        await updateProductById(product.id, updatedProduct);
        alert("Producto actualizado con éxito");
        setProduct(updatedProduct);
      }
      onProductChange()
      handleCloseModal(); // Cierra el modal después de la operación
    } catch (err) {
      console.error("Error al guardar el producto:", err);
      alert("Error al guardar el producto");
    }
  };

  if (!modal) return null;

  return (
    <ModalBox>
      {loading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <>
          <VisualProductBox>
            <Title>{isNewProduct ? "Crear Producto" : product.name}</Title>
            {!isNewProduct && (
              <ImageBox>
                <img src={product.img} alt={product.name} />
              </ImageBox>
            )}
            {!isNewProduct && <Price>Precio: ${product.price}</Price>}
            {!isNewProduct && <Category>Categoría: {product.category}</Category>}
          </VisualProductBox>

          {/* Formulario de actualización o creación */}
          <FormBox>
            <UpdateProductForm
              product={product}
              onSubmit={handleUpdateProduct}
            />
          </FormBox>
        </>
      )}

      <GrContract onClick={handleCloseModal} />
    </ModalBox>
  );
}

export default ModalProductAdmin;
