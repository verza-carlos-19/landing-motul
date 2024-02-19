import React from "react";
import Hero from "../../Components/Hero/Hero";
import ContainerProds from "../../Components/ContainerProds/ContainerProds";

function Productos() {
  return (
    <>
      <Hero
        title={"Nuestros Mejores Productos"}
        image={
          "https://res.cloudinary.com/ds1lnxkfc/image/upload/v1704468646/fondo_nlvvmo.jpg"
        }
        text={
          "Explora la mejor selección de productos Motul para potenciar y cuidar tu vehículo al máximo rendimiento."
        }
      />
      <ContainerProds />
    </>
  );
}

export default Productos;
