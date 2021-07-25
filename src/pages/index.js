import React from "react";
import { Main, Title, SubTitle, Row, Column } from "../components/shared";
import Footer from "../components/footer";
import Banner from "../components/banner";
import styled from "styled-components";
import ImageBanner from "../images/banner-bottom.png";

const Footer2 = styled.div`
  display: flex;
  justify-content: center;
  color: #f4ea39;
  background: #000063;
  padding: 30px;
`;

const Banner2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${ImageBanner});
  height: 500px;
  background-size: cover;
  background-position: center;

  @media (max-width: 700px) {
    max-height: 800px;
    height: 100%;
    padding: 20px;
  }
`;

const Button = styled.div`
  display: flex;
  /* background: #000063; */
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 200px;
  height: 80px;
  margin-right: 10px;
  border: 1px solid #eee;
  border-top-color: #000063;
  border-top-width: 3px;
  transition: all 0.3s linear;

  :hover {
    transform: translateY(-10px);
  }

  @media (max-width: 700px) {
    margin-bottom: 10px;
    width: 100%;
    max-width: 100%;
  }
`;

const ButtonText = styled.div`
  /* color: #f4ea39; */

  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

const BannertButtonText = styled.div`
  color: #000063;
  max-width: 80%;

  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

const BannerButton = styled.div`
  display: flex;
  justify-content: center;
  background: #f4ea39;
  border-radius: 50px;
  padding: 10px;
  text-align: center;
  margin-top: 40px;
  cursor: pointer;
`;

const Text = styled.div`
  font-weight: bold;
  color: #000063;
  font-size: 18px;
  margin-bottom: 30px;
  text-align: center;
`;

const buttons = [
  "ENERGIA ATÉ 90% MAIS BARATA",
  "PAGAR TAXA MÍNIMA DE ENERGIA ELÉTRICA",
  "ECONOMIZE AGORA E SÓ COMECE A PAGAR EM ATÉ 180 DIAS",
];

function IndexPage(props) {
  function openWhatsapp() {
    window.open("https://wa.me/5586999001465");
  }

  return (
    <div>
      <Main>
        <Banner />
        <Banner2>
          <Text>CONFIRA COMO A ENERGIA SOLAR TE AJUDA A ECONOMIZAR!</Text>

          <Row>
            {buttons.map((item) => (
              <Button>
                <ButtonText>{item}</ButtonText>
              </Button>
            ))}
          </Row>

          <BannerButton onClick={openWhatsapp}>
            <BannertButtonText>
              <strong>CLIQUE AQUI</strong> SE VOCÊ QUER GASTAR MENOS NA CONTA DE
              ENERGIA
            </BannertButtonText>
          </BannerButton>
        </Banner2>

        <Footer />
      </Main>
    </div>
  );
}

export default IndexPage;
