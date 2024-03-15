import React from "react";
import {
  BoxCard,
  ButtonCard,
  ButtonsBox,
  CategoryCard,
  ImageBoxCard,
  PriceCard,
  TitleCard,
} from "./CardProductStyles";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/Cart/CartSlice";
import { formatPrice } from "../../utils/formatPrice";

function CardProduct({ id, title, image, price, category }) {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state);
  const prodPrice = formatPrice(price);
  const totalPrice = formatPrice(
    cartItems.reduce((acc, item) => {
      return (acc += item.price * item.quantity);
    }, 0)
  );

  return (
    <>
      <BoxCard>
        <CategoryCard>{category}</CategoryCard>
        <TitleCard>{title}</TitleCard>
        <ImageBoxCard>
          <img src={image} alt={title} width={"80px"} />
        </ImageBoxCard>
        <PriceCard>{prodPrice}</PriceCard>
        <ButtonsBox>
          <ButtonCard
            onClick={() => {
              dispatch(addToCart({ image, title, category, price, id }));
              console.log(
                formatPrice(
                  cartItems.reduce((acc, item) => {
                    return (acc += item.price * item.quantity);
                  }, 0)
                )
              );
            }}
          >
            COMPRAR
          </ButtonCard>
          <ButtonCard>DETALLES</ButtonCard>
        </ButtonsBox>
      </BoxCard>
    </>
  );
}

export default CardProduct;
