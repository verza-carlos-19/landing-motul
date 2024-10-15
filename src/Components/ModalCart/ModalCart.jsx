import React, { useEffect } from "react";
import {
  BuyButton,
  CartBox,
  CartHeadBox,
  CartOverlay,
  CartPrice,
  CartPricingBox,
  CartProductsBox,
  CartTitle,
  ClearButton,
  ModalCartBox,
} from "./ModalCartStyles";
import { IoMdTrash } from "react-icons/io";
import { GrContract } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import ModalCartCard from "./ModalCartCard/ModalCartCard";
import { formatPrice } from "../../utils/formatPrice";
import {
  clearCart,
  toggleHiddenCart,
  toggleHiddenCheckOut,
} from "../../Redux/Cart/CartSlice";
import ModalCheckOut from "./ModalCheckOut/ModalCheckOut";

function ModalCart() {
  const { cartItems, hidden } = useSelector((state) => state.cart);
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
        <ModalCartBox>
          <CartOverlay onClick={() => dispatch(toggleHiddenCart())} />
          <CartBox>
            <CartHeadBox>
              <CartTitle>Shop Cart</CartTitle>
              <GrContract onClick={() => dispatch(toggleHiddenCart())} />
            </CartHeadBox>
            <CartProductsBox>
              {cartItems.length ? (
                cartItems.map((item) => (
                  <ModalCartCard key={item.id} {...item} />
                ))
              ) : (
                <p>Tus productos apreceran aqui !Compra Algo!</p>
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
            <BuyButton
              onClick={() => {
                dispatch(toggleHiddenCheckOut());
              }}
            >
              Pagar
            </BuyButton>
          </CartBox>
        </ModalCartBox>
      )}
    </>
  );
}

export default ModalCart;
