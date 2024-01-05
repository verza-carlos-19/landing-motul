import styled from "styled-components";
export const ProductsGallery = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  /* padding: 1rem; */
  max-width: 1200px;
  @media (max-width: 800px) {
    gap: 1rem;
  }
  @media (max-width: 500px) {
    gap: 2rem;
  }
`;
export const ProductsContiner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  /* max-width: 1200px; */
`;
export const Title = styled.h2`
  font-size: 3rem;
  text-align: center;
  color: white;
  letter-spacing: 1px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;
