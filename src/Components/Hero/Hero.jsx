import React from "react";
import {
  BoxContentHero,
  HeroBackground,
  HeroBox,
  SpecialTextHero,
  TextHero,
  TitleHero,
} from "./HeroStyles";

function Hero() {
  return (
    <>
      <HeroBox>
        <HeroBackground>
          <img src="../../imgs/fondo.jpg" alt="" />
        </HeroBackground>
        <BoxContentHero>
          <TitleHero>¡Desata la Velocidad!</TitleHero>
          <TextHero>
            Del rugido del <SpecialTextHero>Motocross</SpecialTextHero> al
            desafío del <SpecialTextHero>Rally Dakar</SpecialTextHero>, de la
            adrenalina del <SpecialTextHero>MotoGP</SpecialTextHero> a la
            precisión de la <SpecialTextHero>Fórmula 1</SpecialTextHero>:
            nuestros lubricantes con tecnología sintética avanzada garantizan
            rendimiento inigualable, protección suprema y máxima potencia para
            los verdaderos campeones del motorsport.
          </TextHero>
        </BoxContentHero>
      </HeroBox>
    </>
  );
}

export default Hero;
