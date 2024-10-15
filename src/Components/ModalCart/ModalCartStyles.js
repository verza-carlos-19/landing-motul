import styled from "styled-components";
export const ModalCartBox = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  animation: appear .3s ease-in-out 0s 1 ;
  transform-origin: top;
  @keyframes appear {
  0%{
    /* transform: translateX(100%); */
    transform: scaleY(0);
  }  
  100%{
    transform: scaleY(1);
  }  

  }
`;
export const CartOverlay = styled.span`
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(4px);
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
`;
export const CartBox = styled.article`
  z-index: 1;
  box-sizing: border-box;
  width: 45%;
  position: absolute;
  right: 0;
  top: 0;
  height: 100vh;
  background: #131415;
  border: 1px solid white;
  /* box-shadow: -.7rem 0 1rem white; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  @media (max-width: 650px) {
    width: 100%;
    height: 100%;
  }
`;
export const CartHeadBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CartTitle = styled.h4`
  font-size: 1.6rem;
  color: white;
`;
export const CartProductsBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 60%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const CartPricingBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* gap: 7px; */
  border-top: 1px solid white;
`;
export const CartPrice = styled.span`
  font-size: 1.2rem;
  text-align: start;
  padding-left: 2rem;
  color: rgba(255, 255, 255, 0.897);
`;
export const BuyButton = styled.button`
  border: none;
  border-bottom: 1px solid whitesmoke;
  font-size: 1.1rem;
  color: #ffffff;
  width: 80%;
  padding: 0.3rem;
  background: transparent;
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: scale(1.07) translateY(-4px);
    width: 70%;
    box-shadow: 0 12px 10px -12px white;
  }
  &:active {
    transform: scale(1) translateY(0px);
    width: 70%;
    transition: all 0.05s;
    box-shadow: 0 8px 10px -12px white;
  }
`;
export const ClearButton = styled.button`
  border: 1px solid whitesmoke;
  border-bottom: 1px solid whitesmoke;
  font-size: 1.1rem;
  color: #ffffff;
  width: 35%;
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
