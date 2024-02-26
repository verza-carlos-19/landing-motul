import React from "react";
import Hero from "../../Components/Hero/Hero";
import CardInfo from "../../Components/CardInfo/CardInfo";
import ButtonSpecial from "../../Components/ButtonSpecial/ButtonSpecial";

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
      <CardInfo
        dir={"right"}
        img={
          "https://res.cloudinary.com/ds1lnxkfc/image/upload/v1708892429/Carlos-Verza-1_jv6r7d.jpg"
        }
        title={"Dakar Original by Motul"}
        text={
          "Motul es el Aliado confiable en rendimiento y protección para competidores del Dakar y entusiastas del motor"
        }
      />
      <CardInfo
        dir={"left"}
        img={
          "https://res.cloudinary.com/ds1lnxkfc/image/upload/v1708955255/motul-08-799x532_fu5w7a.jpg"
        }
        title={"Fabricando Innovacion"}
        text={
          "Garantizamos productos de alta calidad con tecnología de vanguardia para maximizar el rendimiento y proteger los motores en todas las condiciones"
        }
      />
      <CardInfo
        dir={"right"}
        img={
          "https://res.cloudinary.com/ds1lnxkfc/image/upload/v1708955707/2018_02_WSBK_Thailand_09900_ul9byu.jpg"
        }
        title={"Potenciando Campeones Globales"}
        text={
          "Motul, líder en lubricantes, apoya a atletas y equipos en diversas disciplinas y competiciones globales, impulsando el éxito y la excelencia en cada desafío"
        }
      />
      <ButtonSpecial />
    </>
  );
}

export default About;
