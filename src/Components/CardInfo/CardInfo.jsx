import React from "react";
import {
  ArticleText,
  BackBoxLeft,
  BackBoxright,
  BoxInfo,
  PhotoContainerLeft,
  PhotoContainerRight,
  TitleText,
} from "./CardInfoStyles";

function CardInfo({ dir, img, title, text }) {
  let container = "";
  if (dir === "left") {
    container = (
      <BackBoxLeft>
        <BoxInfo>
          <TitleText>{title}</TitleText>
          <ArticleText>{text}</ArticleText>
        </BoxInfo>
        <PhotoContainerLeft>
          <img src={img} alt="" />
        </PhotoContainerLeft>
      </BackBoxLeft>
    );
  } else if (dir === "right") {
    container = (
      <BackBoxright>
        <BoxInfo>
          <TitleText>{title}</TitleText>
          <ArticleText>{text}</ArticleText>
        </BoxInfo>{" "}
        <PhotoContainerRight>
          <img src={img} alt="" />
        </PhotoContainerRight>
      </BackBoxright>
    );
  } else {
    container = (
      <BackBoxLeft>
        <BoxInfo>
          <TitleText>{title}</TitleText>
          <ArticleText>{text}</ArticleText>
        </BoxInfo>
        <PhotoContainerLeft>
          <img src={img} alt="" />
        </PhotoContainerLeft>
      </BackBoxLeft>
    );
  }
  return <>{container}</>;
}

export default CardInfo;
