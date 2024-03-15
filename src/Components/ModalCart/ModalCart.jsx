import React, { useEffect } from "react";
import {
  BuyButton,
  CartBox,
  CartHeadBox,
  CartPrice,
  CartPricingBox,
  CartProductsBox,
  CartTitle,
  ClearButton,
} from "./ModalCartStyles";
import { IoMdTrash } from "react-icons/io";
import { GrContract } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import ModalCartCard from "./ModalCartCard/ModalCartCard";
import { formatPrice } from "../../utils/formatPrice";
import { clearCart, toggleHiddenCart } from "../../Redux/Cart/CartSlice";

function ModalCart() {
  const { cartItems, hidden } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!hidden) {
      dispatch(toggleHiddenCart());
    }
  }, [dispatch]);
  const totalPrice = formatPrice(
    cartItems.reduce((acc, item) => {
      return (acc += item.price * item.quantity);
    }, 0)
  );

  return (
    <>
      {!hidden && (
        <CartBox>
          <CartHeadBox>
            <CartTitle>Shop Cart</CartTitle>
            <GrContract onClick={() => dispatch(toggleHiddenCart())} />
          </CartHeadBox>
          <CartProductsBox>
            {cartItems.length ? (
              cartItems.map((item) => <ModalCartCard key={item.id} {...item} />)
            ) : (
              <p>No seas amarrete, compra algo</p>
            )}
          </CartProductsBox>
          {cartItems.length ? (
            <ClearButton onClick={() => dispatch(clearCart())}>
              limpiar <IoMdTrash />
            </ClearButton>
          ) : null}
          <CartPricingBox>
            <CartTitle>Total</CartTitle>
            <CartPrice>{totalPrice}</CartPrice>
          </CartPricingBox>
          <BuyButton onClick={() => dispatch(clearCart())}>Pagar</BuyButton>
        </CartBox>
      )}
    </>
  );
}

export default ModalCart;
