import React from "react";
import { Main, Title, SubTitle,Row,Column  } from "../components/shared";
import Footer from '../components/footer';
import Banner from '../components/banner';
import styled from 'styled-components';
import ImageBanner from '../images/banner-bottom.png';

const Footer2 = styled.div`
  display: flex;
  justify-content: center;
  color: #F4EA39;
  background: #000063;
  padding:30px;
`;

const Banner2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${ImageBanner});
  height: 400px;
  background-size: cover;
`;

const Button = styled.div`
  display: flex;
  color: #F4EA39;
  background: #000063;
  padding: 20px;
  border-radius: 10px;
  align-items: center;
  text-align: center;
  max-width: 200px;
  height: 80px;
  margin-right: 10px;
`;

const ButtonText = styled.div`
  color: #F4EA39;
`;

const BannertButtonText = styled.div`
  color: #000063;
  max-width: 80%;
`;

const BannerButton = styled.div`
  display: flex;
  justify-content: center;
  background: #F4EA39;
  border-radius: 50px;
  padding: 10px;
  text-align: center;
  margin-top: 40px;;
`;

const Text = styled.div`
  font-weight: bold;
  color: #000063;
  font-size: 18px;
  margin-bottom: 30px;
`;

const buttons = ['ENERGIA ATÉ 90% MAIS BARATA', 'PAGAR TAXA MÍNIMA DE ENERGIA ELÉTRICA', 'ECONOMIZE AGORA E SÓ COMECE A PAGAR EM ATÉ 180 DIAS']

function IndexPage(props) {
  return (
    <div>
      <Main>
        <Banner />
        <Banner2>
          <Text>CONFIRA COMO A ENERGIA SOLAR TE AJUDA A ECONOMIZAR!</Text>

          <Row>
            {buttons.map(item => (
              <Button>
                <ButtonText>
                  {item}
                </ButtonText>
              </Button>
            ))}
          </Row>
            
          <BannerButton>
            <BannertButtonText><strong>CLIQUE AQUI</strong> SE VOCÊ QUER GASTAR MENOS NA CONTA DE ENERGIA</BannertButtonText>
          </BannerButton>
        </Banner2>

        <Footer2>
          <span>Termos de Uso - Política de Privacidade</span>
        </Footer2>
      </Main>

     

      <Footer />
    </div>
  );
}

export default IndexPage;
