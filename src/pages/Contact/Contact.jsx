import React from "react";
import Hero from "../../Components/Hero/Hero";
import FormContact from "../../Components/FormContact/FormContact";

function Contact() {
  return (
    <>
      <Hero
        title={"Contacto Proveedores Directo"}
        image={
          "https://res.cloudinary.com/ds1lnxkfc/image/upload/v1708437552/image-3a81199-0x0-1410x940_10-00-37-947449_lx5nz0.png"
        }
        text={
          "¡Contáctanos para convertirte en proveedor de productos Motul y ser parte de nuestra red de distribución líder en el mercado de lubricantes y aditivos para automóviles, motocicletas y más!"
        }
      />
      <FormContact />
    </>
  );
}

export default Contact;
