import styled from "styled-components";

export const HeroBox = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: inset 0px -108px 4rem #0d0e0e;
`;
export const TitleHero = styled.h1`
  color: white;
  font-size: 4rem;
  filter: drop-shadow(2px 8px 20px black);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  @media (max-width: 500px) {
    font-size: 2.5rem;
  }
`;

export const BoxContentHero = styled.div`
  position: relative;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  top: -31rem;
  margin-bottom: -24.4rem;
  @media (max-width: 1024px) {
    top: -28rem;
    margin-bottom: -23.4rem;
  }
  @media (max-width: 800px) {
    top: -21rem;
    margin-bottom: -22.4rem;
    gap: 0;
  }
  @media (max-width: 500px) {
    top: -29rem;
    margin-bottom: -26.8rem;
    gap: 2rem;
  }
`;
export const TextHero = styled.p`
  color: white;
  width: 75%;
  font-size: 1.4rem;
  filter: drop-shadow(2px 4px 4px black);
  text-align: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  @media (max-width: 500px) {
    width: 85%;
  }
`;
export const SpecialTextHero = styled.span`
  color: white;
  font-size: 1.401rem;
  text-transform: capitalize;
  filter: drop-shadow(2px 4px 10px grey);
  text-align: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;
export const HeroBackground = styled.div`
  width: 100%;
  z-index: -3;
  max-height: 40rem;
  overflow: hidden;
  img {
    width: 100%;
    filter: hue-rotate(33deg) brightness(0.7);
  }
  @media (max-width: 500px) {
    img {
      width: 1200px;
      position: relative;
      left: -335px;
    }
  }
`;
