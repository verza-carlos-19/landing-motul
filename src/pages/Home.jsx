import React, { useEffect, useState } from "react";
import ContainerProds from "../Components/ContainerProds/ContainerProds";
import Hero from "../Components/Hero/Hero";
import { productsData } from "../data/products";
import CardInfo from "../Components/CardInfo/CardInfo";
import ButtonSpecial from "../Components/ButtonSpecial/ButtonSpecial";
import { useSelector } from "react-redux";
import { getThreeProducts } from "../Axios/productsAxios";

function Home() {
  // const { products } = useSelector((state) => state.categories);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  useEffect(()=>{
    const fetchProduct = async () => {

      setLoading(true);
      setError(null);

        try {
          const productData = await getThreeProducts();
          setProducts(productData);
        } catch (err) {
          setError("Error al cargar el producto");
          console.error(error);
        } finally {
          setLoading(false);
        }
      }
      fetchProduct()
  },[])


  const productsRendered = products;
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
      <CardInfo
        dir={"left"}
        img={
          "https://res.cloudinary.com/ds1lnxkfc/image/upload/v1708955232/how-to-drift-web-680_1_kn8s12.webp"
        }
        title={"FormulaD 2024"}
        text={
          "Potenciando el drift con su gama de lubricantes de alto rendimiento. Donde la precisión y la potencia se encuentran en la pista"
        }
      />
      <CardInfo
        dir={"right"}
        img={
          "https://res.cloudinary.com/ds1lnxkfc/image/upload/v1708892425/Motul_ready_for_another_thrilling_ride_in_MotoGP_2019__Lukasz_Swiderek_fvavpp.jpg"
        }
        title={"MotoGP 2024"}
        text={
          "La velocidad a tope del MotoGp siempre va acompañada de un buen aceite motul V300"
        }
      />
      {
        loading? <p> productos cargando...</p> : <ContainerProds products={productsRendered} />
      }
      <ButtonSpecial />
    </>
  );
}

export default Home;
