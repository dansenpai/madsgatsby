import React from 'react';
import {
  BannerWrapper,
  Column,
  Subtitle,
  Title
} from './styles';
import Navbar from "../navbar";

function Banner() {
  return (
    <BannerWrapper>
      <Navbar />
      <Column>
        <Title>ENERGIA SOLAR</Title>
        <Subtitle>Investindo na sua economia</Subtitle>
      </Column>
    </BannerWrapper>
  );
}

export default Banner;