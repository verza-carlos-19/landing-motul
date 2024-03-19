import React from "react";
import Hero from "../../Components/Hero/Hero";
import ContainerProds from "../../Components/ContainerProds/ContainerProds";
import Categories from "../../Components/Categories/Categories";

import { useSelector } from "react-redux";
import { productsData } from "../../data/products";

function Productos() {
  const { productsFiltered } = useSelector((state) => state.categories);
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
      <Categories />
      <ContainerProds lenght={productsFiltered} />
    </>
  );
}

export default Productos;
