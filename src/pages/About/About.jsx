import React from "react";
import Hero from "../../Components/Hero/Hero";

function About() {
  return (
    <>
      <Hero
        title={"Acelerando La Excelencia"}
        image={
          "https://res.cloudinary.com/ds1lnxkfc/image/upload/v1708437542/5e149f980de694cb45349715-original-by-motul-la-categoria-mas-dura-del-dakar_bev7g9.jpg"
        }
        text={
          "Descubre nuestra pasión por la excelencia en lubricantes y productos para el cuidado del motor. En Motul, nos dedicamos a proporcionar soluciones innovadoras y de alta calidad para satisfacer las necesidades de nuestros clientes en el mundo del motor."
        }
      />
    </>
  );
}

export default About;
