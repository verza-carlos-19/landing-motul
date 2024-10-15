import React from "react";
import CardProduct from "../CardProduct/CardProduct";
import {
  ProductsContiner,
  ProductsGallery,
  Title,
} from "./ContainerProdsStyles";
import Modal from "../ModalConfimation/ModalConfirmation";

function ContainerProds({ lenght }) {
  const arrayProp = lenght;
  return (
    <>
      <ProductsContiner>
        <Title>Productos</Title>
        <ProductsGallery>
          {arrayProp.map((element) => {
            return (
              <CardProduct
                key={element.id}
                id={element.id}
                title={element.name}
                image={element.img}
                price={element.price}
                category={element.category}
              />
            );
          })}
        </ProductsGallery>
      </ProductsContiner>
    </>
  );
}

export default ContainerProds;
