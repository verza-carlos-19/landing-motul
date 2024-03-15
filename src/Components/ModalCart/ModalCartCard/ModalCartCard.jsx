import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { IoMdTrash } from "react-icons/io";
import {
  ProdcutInfoBox,
  ProductBox,
  ProductImage,
  ProductPrice,
  ProductQuantityHandler,
  ProductTitle,
  QuantityDisplay,
  QuantityModifier,
} from "./ModalCartCardStyles";
import { formatPrice } from "../../../utils/formatPrice";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  clearItemCart,
} from "../../../Redux/Cart/CartSlice";
function ModalCartCard({ id, image, title, price, quantity }) {
  const priceProd = formatPrice(price);
  const dispatch = useDispatch();
  return (
    <>
      <ProductBox>
        <ProductImage src={image} alt={title} />
        <ProdcutInfoBox>
          <ProductTitle>{title}</ProductTitle>
          <ProductPrice>{priceProd}</ProductPrice>
        </ProdcutInfoBox>
        <ProductQuantityHandler>
          <QuantityModifier onClick={() => dispatch(removeFromCart(id))}>
            <FaMinus />
          </QuantityModifier>
          <QuantityDisplay>{quantity}</QuantityDisplay>
          <QuantityModifier
            onClick={() => dispatch(addToCart({ image, title, price, id }))}
          >
            <FaPlus />
          </QuantityModifier>
        </ProductQuantityHandler>
        <QuantityModifier onClick={() => dispatch(clearItemCart(id))}>
          <FaTrash />
        </QuantityModifier>
      </ProductBox>
    </>
  );
}

export default ModalCartCard;
