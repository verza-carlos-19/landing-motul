
import React, { useEffect, useState } from "react";
import { ButtonCreate, CreateBox, ProdcutInfoBox, ProductBox, ProductCategory, ProductImage, ProductPrice, ProductsContainerBox, ProductTitle, QuantityDisplay } from "./ContainerProdsAdminStyles";
import { formatPrice } from "../../utils/formatPrice";
import { productsData } from "../../data/products";
import ButtonLogin from "../UI/ButtonLogin/ButtonLogin";
import { getAllProducts } from "../../Axios/productsAxios";
import ButtonProdsAdmin from "../UI/ButtonProdsAdmin/ButtonProdsAdmin";
import ModalProducAdmin from "./ModalProductAdmin/ModalProductAdmin";
import ModalProductAdmin from "./ModalProductAdmin/ModalProductAdmin";
import { useDispatch } from "react-redux";
import { toggleHiddenModal } from "../../Redux/ModalProduct/ModalProductSlice";


function ProductCard({ id, img, name, price, category, onProductChange }) {
  const priceProd = formatPrice(price);
  return (
    <>
      <ProductBox>
        <ProductImage src={img} alt={name} />
        <ProdcutInfoBox>
          <ProductTitle>{name}</ProductTitle>
          <ProductPrice>{priceProd}</ProductPrice>
        </ProdcutInfoBox>
          <ProductCategory>tipo = {category}</ProductCategory>
        <QuantityDisplay><ButtonProdsAdmin isEditer={true} id={id}  /><ButtonProdsAdmin isEditer={false} id={id} triggerChange={onProductChange}/></QuantityDisplay>
      </ProductBox>
    </>
  );
}
function CreateCard() {
  const dispatch = useDispatch();
  return (
    <>
      <CreateBox>
        <ButtonCreate onClick={()=> dispatch(toggleHiddenModal())}>Create</ButtonCreate>
      </CreateBox>
    </>
  );
}

const ContainerProdsAdmin = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reloadTrigger, setReloadTrigger] = useState(false); // Nuevo estado para forzar recargas

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const productsData = await getAllProducts();
        if (productsData) {
          setProducts(productsData);
        }
      } catch (error) {
        console.error("Error al cargar productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [reloadTrigger]); // Se ejecuta cada vez que `reloadTrigger` cambia

  const handleProductChange = () => {
    setReloadTrigger((prev) => !prev); // Cambia el estado para forzar el useEffect
  };

  if (loading) return <p>Cargando productos...</p>;

  return (
    <>
      <ProductsContainerBox>
        {products.length ? (
          products.map((item) => (
            <ProductCard 
              key={item.id} 
              {...item} 
              onProductChange={handleProductChange} // Pasamos el handler
            />
          ))
        ) : (
          <p>No hay productos disponibles</p>
        )}
        <CreateCard/>
      </ProductsContainerBox>

      <ModalProductAdmin onProductChange={handleProductChange} />
    </>
  );
};

export default ContainerProdsAdmin;