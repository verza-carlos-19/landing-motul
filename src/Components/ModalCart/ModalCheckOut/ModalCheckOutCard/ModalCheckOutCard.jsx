import React from "react";
import {
  ProdcutInfoBox,
  ProductBox,
  ProductImage,
  ProductPrice,
  ProductTitle,
  QuantityDisplay,
} from "./ModalCheckOutCardStyles";
import { formatPrice } from "../../../../utils/formatPrice";

function ModalCheckOutCard({ id, image, title, price, quantity }) {
  const priceProd = formatPrice(price * quantity);
  return (
    <>
      <ProductBox>
        <ProductImage src={image} alt={title} />
        <ProdcutInfoBox>
          <ProductTitle>{title}</ProductTitle>
          <ProductPrice>{priceProd}</ProductPrice>
        </ProdcutInfoBox>
        <QuantityDisplay>{quantity}</QuantityDisplay>
      </ProductBox>
    </>
  );
}

export default ModalCheckOutCard;
