import styled from "styled-components";
export const ProductBox = styled.figure`
  box-sizing: border-box;
  /* width: 100%; */
  border-bottom: 1px solid white;
  box-shadow: 0px 7px 3px -5px rgba(255, 255, 255, 0.233);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.3rem;
  padding: 0 1rem;
`;
export const ProductImage = styled.img`
  width: 40px;
`;
export const ProdcutInfoBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 30%;
  padding: 0.3rem 0;
  overflow: hidden;
`;
export const ProductTitle = styled.h4`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.897);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
export const ProductPrice = styled.span`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: rgba(255, 255, 255);
`;
export const QuantityDisplay = styled.span`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
