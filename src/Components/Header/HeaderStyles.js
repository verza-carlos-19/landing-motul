import styled from "styled-components";

export const HeaderBackground = styled.header`
  width: 100%;
  display: flex;
  position: fixed;
  z-index: 5;
  justify-content: center;
  /* background-color: #0d0e0e; */
  background: rgb(36, 191, 193);
  background: linear-gradient(
    0deg,
    rgba(36, 191, 193, 0) 0%,
    rgba(0, 0, 0, 0.654499299719888) 12%,
    rgba(0, 0, 0, 0.8701855742296919) 33%,
    rgba(0, 0, 0, 1) 65%
  );
`;
export const HeaderBox = styled.article`
  max-width: 1200px;
  width: 100%;
  padding: 1.3rem 2rem 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 590px) {
    .cart {
      position: absolute;
      right: 32%;
      top: 25px;
    }
  }
`;
export const HeaderLogo = styled.div`
  width: 10%;
  img {
    width: 100%;
    transition: 0.5s ease-in-out;
  }
  img:hover {
    cursor: pointer;
    transform: scale(1.01);
    filter: grayscale(1);
  }
  @media (max-width: 800px) {
    width: 20%;
  }
  @media (max-width: 800px) {
    width: 30%;
  }
`;
