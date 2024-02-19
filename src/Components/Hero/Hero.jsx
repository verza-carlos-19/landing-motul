import React from "react";
import {
  BoxContentHero,
  HeroBackground,
  HeroBox,
  SpecialTextHero,
  TextHero,
  TitleHero,
} from "./HeroStyles";

function Hero({ title, image, text }) {
  return (
    <>
      <HeroBox>
        <HeroBackground>
          <img src={image} alt="hero" />
        </HeroBackground>
        <BoxContentHero>
          <TitleHero>{title}</TitleHero>
          <TextHero>{text}</TextHero>
        </BoxContentHero>
      </HeroBox>
    </>
  );
}

export default Hero;
