import styled from "styled-components";
import BannerImage from "../../images/banner-top.png";

export const BackgroundWrapper = styled.div`
  height: 500px;
  background-size: cover;
  background-image: url(${BannerImage});
  background-position: center;

  @media (max-width: 700px) {
    max-height: 400px;
  }
`;

export const BannerWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px 40px;

  @media (max-width: 700px) {
    padding: 40px 20px;
  }
`;

export const Title = styled.div`
  font-size: 55px;
  font-weight: bold;
  color: #000063;

  @media (max-width: 700px) {
    font-size: 30px;
  }
`;

export const Subtitle = styled.div`
  font-size: 40px;
  font-weight: 500;
  color: #000063;
  font-weight: 500;

  @media (max-width: 700px) {
    font-size: 20px;
  }
`;

export const StoreLinks = styled.div`
  margin-top: 40px;
  display: flex;
`;

export const ImageStore = styled.img`
  height: 60px;
  margin-right: 20px;
`;

export const WebButton = styled.div`
  display: flex;
  background: #000;
  border-radius: 8px;
  box-shadow: 1px 1px 1px #ccc;
  height: 60px;
  flex: 1;
  align-items: center;
  padding-left: 20px;
`;

export const BrandName = styled.div`
  color: #fff;
  font-size: 14px;
`;
export const AccessText = styled.div`
  color: #fff;
  font-size: 25px;
`;
