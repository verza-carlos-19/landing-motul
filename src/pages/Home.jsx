import React from "react";
import ContainerProds from "../Components/ContainerProds/ContainerProds";
import Hero from "../Components/Hero/Hero";

function Home() {
  return (
    <>
      <Hero
        title={"¡Desata la Velocidad!"}
        image={
          "https://res.cloudinary.com/ds1lnxkfc/image/upload/v1704468646/fondo_nlvvmo.jpg"
        }
        text={
          "Del rugido del Motocross al desafío del Rally Dakar, de la adrenalina del MotoGP a la precisión de la Fórmula 1: nuestros lubricantes con tecnología sintética avanzada garantizan rendimiento inigualable, protección suprema y máxima potencia para los verdaderos campeones del motorsport."
        }
      />
      <ContainerProds />
    </>
  );
}

export default Home;
