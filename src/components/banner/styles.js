import styled from "styled-components";
import BannerImage  from '../../images/banner-top.png'

export const BannerWrapper = styled.div`
  height: 560px;
  background-size: cover;
  background-image: url(${BannerImage});
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px 40px;
`;


export const Title = styled.div`
  font-size: 55px;
  font-weight: bold;
  color: #000063;
`;

export const Subtitle = styled.div`
  font-size: 40px;
  font-weight: 500;
  color: #000063;
  font-weight: 500;
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
