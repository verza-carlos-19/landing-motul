import styled from "styled-components";
export const ProductsContainerBox = styled.div`
width: 90%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
border: 2px solid white;
background-color:black;
`;
export const ProductBox = styled.figure`
  box-sizing: border-box;
  width: 100%;
  border-bottom: 1px solid white;
  box-shadow: 0px 7px 3px -5px rgba(255, 255, 255, 0.233);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0rem;
  padding: 1rem 1rem;
  margin: 0;
`;
export const ProductImage = styled.img`
  width: 10%;
`;
export const ProdcutInfoBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 0.5rem;
  width: 20%;
  padding: 0rem 0;
  /* overflow: hidden; */
`;
export const ProductTitle = styled.h4`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.897);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-family: var(--font7);
  margin-top: 0;

  white-space: nowrap;
  /* text-overflow: ellipsis; */
  /* overflow: hidden; */
`;
export const ProductCategory = styled.span`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.897);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-family: var(--font7);
  margin-top: 10px;
  font-weight: 600;
  white-space: nowrap;
  /* text-overflow: ellipsis; */
  /* overflow: hidden; */
`;
export const ProductPrice = styled.span`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: rgba(255, 255, 255);
`;
export const QuantityDisplay = styled.span`
  /* width: 20px; */
  /* height: 20px; */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  &> button:nth-child(1){
    background-color: #14ed89;
  }
`;
export const ButtonCreate = styled.button`
border: 2px solid white;
background-color: goldenrod;
color: white;
font-size: 1.2rem;
padding: .5rem 2rem;
text-transform: capitalize;
font-weight: 700;
font-family: var(--font7);
`;
export const CreateBox = styled.div`
border: 1px solid white;
background-color: black;
width: 100%;
box-sizing: border-box;

padding: 1rem;
display: flex;
justify-content: center;
align-items: center;
`;