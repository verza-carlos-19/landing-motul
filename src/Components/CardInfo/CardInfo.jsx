import React from "react";
import {
  ArticleText,
  BackBox,
  BoxInfo,
  PhotoContainerLeft,
  PhotoContainerRight,
  TitleText,
} from "./CardInfoStyles";

function CardInfo({ dir, img, title, text }) {
  let container = "";
  if (dir === "left") {
    container = (
      <BackBox style={{ flexDirection: "row-reverse" }}>
        <BoxInfo>
          <TitleText>{title}</TitleText>
          <ArticleText>{text}</ArticleText>
        </BoxInfo>
        <PhotoContainerLeft>
          <img src={img} alt="" />
        </PhotoContainerLeft>
      </BackBox>
    );
  } else if (dir === "right") {
    container = (
      <BackBox>
        <BoxInfo>
          <TitleText>{title}</TitleText>
          <ArticleText>{text}</ArticleText>
        </BoxInfo>{" "}
        <PhotoContainerRight>
          <img src={img} alt="" />
        </PhotoContainerRight>
      </BackBox>
    );
  } else {
    container = (
      <BackBox style={{ flexDirection: "row-reverse" }}>
        <BoxInfo>
          <TitleText>{title}</TitleText>
          <ArticleText>{text}</ArticleText>
        </BoxInfo>
        <PhotoContainerLeft>
          <img src={img} alt="" />
        </PhotoContainerLeft>
      </BackBox>
    );
  }
  return <>{container}</>;
}

export default CardInfo;
