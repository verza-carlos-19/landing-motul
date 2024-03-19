import styled from "styled-components";

export const ModalCheckOutBox = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
`;
export const CheckOutOverlay = styled.span`
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(4px);
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
`;
export const CheckOutBox = styled.article`
  z-index: 2;
  box-sizing: border-box;
  width: 60%;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 90vh;
  background: #131415;
  border: 1px solid white;
  /* box-shadow: -.7rem 0 1rem white; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  @media (max-width: 850px) {
    width: 100%;
    height: 100%;
  }
`;
export const CheckOutHeadBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CheckOutTitle = styled.h4`
  font-size: 1.6rem;
  color: white;
  margin: 0;
  padding: 0.5rem;
`;
export const CheckOutProductsBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 60%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const CheckOutShippingBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid white;
`;
export const ShippingListBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const ShippingItem = styled.figure`
  box-sizing: border-box;
  margin: 0;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  perspective: 500px;
  gap: 0.3rem;
  p {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1rem;
    color: white;
  }
  & > p > label {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
  input {
    width: 20px;
    height: 20px;
    border: 2px solid white;
    appearance: none;
    background-color: transparent;
    border-radius: 3px;
    transition: all 0.5s ease-in-out;
    box-shadow: inset 0 0 6px black, 0 0 5px black;
  }
  input:hover {
    box-shadow: inset 0 0 6px white, 0 0 3px black, 0 0 8px white, 0 0 3px white;
  }
  input:checked {
    background: white;
    box-shadow: inset 0 0 8px white, 0 0 6px #656565;
    transform: rotateZ(270deg) rotateY(0deg) rotateX(180deg);
  }
`;
export const ShipTitleItem = styled.p`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1rem;
  color: white;
  text-align: center;
  & > label {
    cursor: pointer;
  }
  &:hover > span,
  & > span:hover {
    visibility: visible;
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;
export const ShipInfoFloat = styled.span`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  cursor: default;
  font-size: 1rem;
  color: white;
  width: 140px;
  background-color: #333;
  border: 1px solid white;
  box-shadow: inset 0 0 3px white, 0 6px 7px -8px white;
  display: block;
  color: #fff;
  text-align: center;
  border-radius: 8px;
  padding: 5px;
  position: relative;
  z-index: 3;
  top: -23px;
  opacity: 0;
  transform: translateY(50%) scale(0);
  margin-top: -65px;
  transition: opacity 0.5s, transform 0.3s;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: white transparent transparent transparent;
  }
`;

export const CheckOutPricingBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* gap: 7px; */
  border-top: 1px solid white;
  perspective: 500px;
`;
export const CheckOutPrice = styled.span`
  font-size: 1.2rem;
  text-align: start;
  padding-left: 2rem;
  color: rgba(255, 255, 255, 0.897);
  transition: all 0.5s ease-in-out;
  animation: roulette 0.7s ease-in-out 1;

  @keyframes roulette {
    0% {
      transform: rotateX(-90deg) scale(1) translateY(100%);
      opacity: 0;
    }
    100% {
      transform: rotateX(0deg) scale(1) translateY(0);
      opacity: 1;
    }
  }
`;
export const CheckOutBuyButton = styled.button`
  border: none;
  border-bottom: 1px solid whitesmoke;
  font-size: 1.1rem;
  color: #ffffff;
  width: 40%;
  padding: 0.3rem;
  background: transparent;
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: scale(1.07) translateY(-4px);
    width: 30%;
    box-shadow: 0 12px 10px -12px white;
  }
  &:active {
    transform: scale(1) translateY(0px);
    width: 30%;
    transition: all 0.05s;
    box-shadow: 0 8px 10px -12px white;
  }
`;
