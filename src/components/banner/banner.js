import React from "react";
import {
  BannerWrapper,
  BackgroundWrapper,
  Column,
  Subtitle,
  Title,
} from "./styles";
import Navbar from "../navbar";

function Banner() {
  return (
    <BackgroundWrapper>
      <BannerWrapper>
        <Navbar />
        <Column>
          <Title>ENERGIA SOLAR</Title>
          <Subtitle>Investindo na sua economia</Subtitle>
        </Column>
      </BannerWrapper>
    </BackgroundWrapper>
  );
}

export default Banner;
