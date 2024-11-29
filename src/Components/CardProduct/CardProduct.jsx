import React, { useState } from "react";
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
import { Link } from "react-router-dom";

function CardProduct({ id, title, image, price, category }) {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const {usuario, setUsuario} = useState(false);
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
          {
            user ? (
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
                ) : (
                  <Link to={"/login"}><ButtonCard>Login to add to cart</ButtonCard></Link>
                )
          }
          
          {/* <ButtonCard>DETALLES</ButtonCard> */}
        </ButtonsBox>
      </BoxCard>
    </>
  );
}

export default CardProduct;
