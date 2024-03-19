import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  toggleHiddenCart,
  toggleHiddenCheckOut,
  updateShipPercentage,
} from "../../../Redux/Cart/CartSlice";
import { FaShippingFast } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import {
  CheckOutBox,
  CheckOutBuyButton,
  CheckOutHeadBox,
  CheckOutOverlay,
  CheckOutPrice,
  CheckOutPricingBox,
  CheckOutProductsBox,
  CheckOutShippingBox,
  CheckOutTitle,
  ModalCheckOutBox,
  ShipInfoFloat,
  ShipTitleItem,
  ShippingItem,
  ShippingListBox,
} from "./ModalCheckOutStyles";
import { GrContract } from "react-icons/gr";
import { formatPrice } from "../../../utils/formatPrice";
import ModalCheckOutCard from "./ModalCheckOutCard/ModalCheckOutCard";
import {
  handleCheckboxChange,
  percentageCalculator,
} from "../../../utils/modalCheckOutUtils/methodsShip";
function ModalCheckOut() {
  const { cartItems, hiddenCheckOut, percentageShip } = useSelector(
    (state) => state.cart
  );
  const resetPrice = document.querySelector("#price");
  const dispatch = useDispatch();
  useEffect(() => {
    if (!hiddenCheckOut) {
      dispatch(toggleHiddenCheckOut());
    }
  }, [dispatch]);
  const prePrice = percentageCalculator(cartItems, percentageShip);

  return (
    <>
      {!hiddenCheckOut && (
        <ModalCheckOutBox>
          <CheckOutOverlay onClick={() => dispatch(toggleHiddenCheckOut())} />
          <CheckOutBox>
            <CheckOutHeadBox>
              <CheckOutTitle>Check Out</CheckOutTitle>
              <GrContract onClick={() => dispatch(toggleHiddenCheckOut())} />
            </CheckOutHeadBox>
            <CheckOutProductsBox>
              {cartItems.length ? (
                cartItems.map((item) => (
                  <ModalCheckOutCard key={item.id} {...item} />
                ))
              ) : (
                <p>
                  aqui podras elegir tu metodo de envio y pagar, compra algo!
                </p>
              )}
            </CheckOutProductsBox>
            <CheckOutShippingBox>
              <CheckOutTitle>Elegi tu envio:</CheckOutTitle>
              <ShippingListBox>
                <ShippingItem>
                  <ShipTitleItem>
                    <label htmlFor="correoArgentino">
                      Correo Argentino <MdLocalShipping />{" "}
                    </label>
                    <ShipInfoFloat>
                      3-6 dias, 10% del valor de la compra
                    </ShipInfoFloat>
                  </ShipTitleItem>
                  <input
                    type="checkbox"
                    name="correo argentino"
                    id="correoArgentino"
                    onClick={() => {
                      handleCheckboxChange(event);
                      dispatch(updateShipPercentage(10));

                      // prePrice = percentageCalculator(cartItems, 10);
                    }}
                  />
                </ShippingItem>
                <ShippingItem>
                  <ShipTitleItem>
                    <label htmlFor="andreani">
                      Andreani
                      <FaShippingFast />
                    </label>
                    <ShipInfoFloat>
                      2-4 dias, 20% del valor de la compra
                    </ShipInfoFloat>
                  </ShipTitleItem>
                  <input
                    type="checkbox"
                    name="Andreani"
                    id="andreani"
                    onClick={() => {
                      handleCheckboxChange(event);
                      dispatch(updateShipPercentage(20));
                      // prePrice = percentageCalculator(cartItems, 20);
                    }}
                  />
                </ShippingItem>
                <ShippingItem>
                  <ShipTitleItem>
                    <label htmlFor="sucursal">retiro en sucursal</label>
                  </ShipTitleItem>
                  <input
                    type="checkbox"
                    name="sucursal"
                    id="sucursal"
                    onClick={() => {
                      handleCheckboxChange(event);
                      dispatch(updateShipPercentage(0));

                      // prePrice = percentageCalculator(cartItems, 0);
                    }}
                  />
                </ShippingItem>
              </ShippingListBox>
            </CheckOutShippingBox>
            <CheckOutPricingBox>
              <CheckOutTitle>Total</CheckOutTitle>
              <CheckOutPrice id="price">{prePrice}</CheckOutPrice>
            </CheckOutPricingBox>
            <CheckOutBuyButton
              onClick={() => {
                dispatch(clearCart());
                dispatch(toggleHiddenCart());
                dispatch(toggleHiddenCheckOut());
              }}
            >
              Pagar
            </CheckOutBuyButton>
          </CheckOutBox>
        </ModalCheckOutBox>
      )}
    </>
  );
}

export default ModalCheckOut;
