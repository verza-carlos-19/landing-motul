import React from "react";
import CardProduct from "../CardProduct/CardProduct";
import {
  ProductsContiner,
  ProductsGallery,
  Title,
} from "./ContainerProdsStyles";
import { productsData } from "../../data/products";

function ContainerProds() {
  return (
    <>
      <ProductsContiner>
        <Title>Productos</Title>
        <ProductsGallery>
          {productsData.map((element) => {
            return (
              <CardProduct
                key={element.id}
                title={element.name}
                image={element.img}
                price={element.price}
              />
            );
          })}
        </ProductsGallery>
      </ProductsContiner>
    </>
  );
}

export default ContainerProds;
