import styled from "styled-components";
export const FooterBox = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 3rem;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 5%,
    rgba(255, 255, 255, 0.05) 27%,
    rgba(255, 255, 255, 0.2) 61%,
    rgba(255, 255, 255, 0.35186) 75%,
    rgba(255, 255, 255, 0.9) 95%,
    rgba(255, 255, 255, 1) 100%
  );
`;

export const FooterBottomBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  max-width: 1200px;
  p {
    color: black;
    font-size: 0.85rem;
    margin-bottom: 0.3rem;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
    margin-top: 1.5rem;
  }
  @media (max-width: 800px) {
    p {
      font-size: 1.5rem;
    }
  }
`;
export const FooterTopBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  max-width: 1200px;
  img {
    position: relative;
    width: 10%;
    top: -0.8rem;
    margin-bottom: -2rem;
  }
  @media (max-width: 800px) {
    img {
      width: 20%;
    }
  }
  @media (max-width: 500px) {
    img {
      width: 35%;
    }
  }
`;
