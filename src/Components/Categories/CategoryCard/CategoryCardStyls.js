import styled from "styled-components";

export const CardCategoryBox = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.8rem;
  border: 2px solid white;
  box-shadow: 0 0 1rem white, inset 0 0 0.5rem white;
  transition: all 0.4s ease-in-out;
  border-radius: 10px;
  background-color: #ffffff5c;
  cursor: pointer;
  backdrop-filter: blur(3px);
  &:hover {
    scale: 1.1;
    box-shadow: 0 0 1.3rem white, inset 0 0 0.1rem white;
    background-color: #f92121bd;
  }
`;
export const CardCategoryText = styled.p`
  font-size: 1.6rem;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: white;
  font-weight: 500;
  text-align: center;
`;
