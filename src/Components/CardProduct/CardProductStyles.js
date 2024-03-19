import styled from "styled-components";
export const BoxCard = styled.div`
  width: 275px;
  border: 2px solid white;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 2.5rem 1rem 2.5rem;
  box-shadow: 0 0 0.5rem white, inset 0 0 0.3rem white;
  transition: 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 0 1.3rem white, inset 0 0 1rem white;
  }
  @media (max-width: 500px) {
    scale: 0.9;
  }
`;
export const CategoryCard = styled.span`
  color: white;
  border: none;
  border-radius: 3px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
  font-size: 0.8rem;
  padding: 0.4rem 1.3rem;
  position: relative;
  left: -40%;
  background-color: #f92121bd;
  margin-bottom: -15px;
`;
export const TitleCard = styled.h3`
  color: white;
  text-align: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.5rem;
  transition: 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    color: crimson;
  }
`;
export const ImageBoxCard = styled.div`
  width: 85%;
  filter: grayscale(1);
  transition: all 0.5s ease-in-out;
  &:hover {
    filter: grayscale(0);
  }
  img {
    width: 100%;
    transition: all 0.5s ease-in-out;
    /* filter: grayscale(1); */
  }
  img:hover {
    transform: scale(1.1);
    /* filter: drop-shadow(0 0 3rem crimson) grayscale(0); */
    filter: drop-shadow(0 0 0.5rem white);
  }
`;
export const PriceCard = styled.h4`
  /* color: grey; */
  /* color: crimson; */
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.5rem;
`;
export const ButtonsBox = styled.div`
  display: flex;
  width: fit-content;
  gap: 1rem;
`;
export const ButtonCard = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid transparent;
  border-top: 1px solid white;
  color: white;
  font-size: 0.7rem;
  background-color: #131415;
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid white;
    box-shadow: inset 0 0 0.2rem white, 0 0 0.5rem white;
  }
`;
