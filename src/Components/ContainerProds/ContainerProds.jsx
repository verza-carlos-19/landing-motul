import React from "react";
import CardProduct from "../CardProduct/CardProduct";
import {
  ProductsContiner,
  ProductsGallery,
  Title,
} from "./ContainerProdsStyles";

function ContainerProds({ products }) {
  const arrayProp = products;
  // if (!lenght) {
  //   console.log("no hay productos")
  //   console.log(lenght)
  //   return;
  // }

  return (
    <>
      <ProductsContiner>
        <Title>Productos</Title>
        <ProductsGallery>
          {products.map((element) => {
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
