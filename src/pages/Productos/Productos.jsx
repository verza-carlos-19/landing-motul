// import React, { useEffect } from "react";
// import Hero from "../../Components/Hero/Hero";
// import ContainerProds from "../../Components/ContainerProds/ContainerProds";
// import Categories from "../../Components/Categories/Categories";

// import { useDispatch, useSelector } from "react-redux";
// import { productsData } from "../../data/products";
// import ContainerProdsAdmin from "../../Components/ContainerProdsAdmin/ContainerProdsAdmin";
// import { user } from "../../USERSVALIDATION/UserValidation";
// import { getProducts } from "../../Redux/Categories/CategorySlice";


// function Productos() {
//   // const { productsFiltered } = useSelector((state) => state.categories);
//   const dispatch = useDispatch();
//   const { productsFiltered, loading, error } = useSelector((state) => state.categories);

//   useEffect(() => {
//     dispatch(getProducts()); // Cargar productos al montar
//   }, [dispatch]);
  

//   return (
//     <>
//       <Hero
//         title={"Nuestros Mejores Productos"}
//         image={
//           "https://res.cloudinary.com/ds1lnxkfc/image/upload/v1708437346/MicrosoftTeams-image__2_n3kbjz.jpg"
//         }
//         text={
//           "Explora nuestra selección de productos Motul: calidad premium para el cuidado y mantenimiento de tu vehículo. Desde lubricantes hasta aditivos, encuentra todo lo que necesitas para un rendimiento óptimo."
//         }
//       />
//           {
//   user.type ? (
//     <>
//       <Categories />

//       {loading ? (
//         <p>Cargando productos...</p>
//       ) : error ? (
//         <p>Error al cargar productos: {error}</p>
//       ) : (
//         // console.log("esto es lo que llega"+ productsFiltered)
        
//           <ContainerProds length={productsFiltered} />
//       )}
//     </>
//   ) : (
//     <ContainerProdsAdmin />
//   )}

//     </>
//   );
// }

// export default Productos;

import React, { useEffect, useState } from "react";
import Hero from "../../Components/Hero/Hero";
import ContainerProds from "../../Components/ContainerProds/ContainerProds";
import Categories from "../../Components/Categories/Categories";
import ContainerProdsAdmin from "../../Components/ContainerProdsAdmin/ContainerProdsAdmin";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/Categories/CategorySlice"; // Asegúrate de que la ruta sea correcta
import { user } from "../../USERSVALIDATION/UserValidation"; // Verifica que la importación sea válida

function Productos() {
  const dispatch = useDispatch();
  const { productsFiltered, loading, error } = useSelector((state) => state.categories);
  const { user } = useSelector((state) => state.user);
  const [isAdmin, setIsAdmin] = useState(false)
  useEffect(() => {
    dispatch(getProducts());
    // Cargar productos al montar
    if (user === null) {
      setIsAdmin(false)
      console.log("prueba, aca tendria que ser null")
    }else{
      setIsAdmin(user.isAdmin)
      console.log("prueba, aca tendria que ser true o false")
    }
    
  }, [dispatch, user]);

  return (
    <>
      <Hero
        title={"Nuestros Mejores Productos"}
        image={
          "https://res.cloudinary.com/ds1lnxkfc/image/upload/v1708437346/MicrosoftTeams-image__2_n3kbjz.jpg"
        }
        text={
          "Explora nuestra selección de productos Motul: calidad premium para el cuidado y mantenimiento de tu vehículo. Desde lubricantes hasta aditivos, encuentra todo lo que necesitas para un rendimiento óptimo."
        }
      />

      { !isAdmin ? (
        <>
          <Categories />

          {loading ? (
            <p>Cargando productos...</p>
          ) : error ? (
            <p>Error al cargar productos: {error}</p>
          ) : productsFiltered && productsFiltered.length > 0 ? (
            <ContainerProds products={productsFiltered} />
          ) : (
            <p>No hay productos disponibles.</p>
          )}
        </>
      ) : (
        <ContainerProdsAdmin />
      )}
    </>
  );
}

export default Productos;
