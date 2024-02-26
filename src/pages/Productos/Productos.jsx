import React from "react";
import Hero from "../../Components/Hero/Hero";
import ContainerProds from "../../Components/ContainerProds/ContainerProds";
import { productsData } from "../../data/products";

function Productos() {
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
      <ContainerProds lenght={productsData.complete} />
    </>
  );
}

export default Productos;
