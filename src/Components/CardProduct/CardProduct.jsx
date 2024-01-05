import React from "react";
import {
  BoxCard,
  ButtonCard,
  ButtonsBox,
  ImageBoxCard,
  PriceCard,
  TitleCard,
} from "./CardProductStyles";

function CardProduct({ title, image, price }) {
  const formatPrice = price.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
  });
  return (
    <>
      <BoxCard>
        <TitleCard>{title}</TitleCard>
        <ImageBoxCard>
          <img src={image} alt={title} />
        </ImageBoxCard>
        <PriceCard>{formatPrice}</PriceCard>
        <ButtonsBox>
          <ButtonCard>COMPRAR</ButtonCard>
          <ButtonCard>DETALLES</ButtonCard>
        </ButtonsBox>
      </BoxCard>
    </>
  );
}

export default CardProduct;
