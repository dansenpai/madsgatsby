import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const BackgroundFooter = styled.div`
  background: linear-gradient(to right, #2b32b2, #000063);

  @media (max-width: 700px) {
  }
`;

const FooterWrapper = styled.footer`
  padding: 0px 40px 0 40px;
  max-width: 1280px;
  margin: 0 auto;

  @media (max-width: 700px) {
    padding: 0px 20px;
  }
`;

const Title = styled.div`
  font-size: 95px;
  color: #fff;
  font-weight: 700;
  line-height: 1.2;
`;

const Subtitle = styled.div`
  font-size: 16px;
  color: #fff;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 10px;
`;

const Column = styled.div`
  max-width: 60%;
  margin-top: 80px;

  @media (max-width: 700px) {
    max-width: 100%;
    width: 80%;
    margin-top: 40px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 40px;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const Address = styled.div``;

const Street = styled.div`
  font-weight: normal;
  color: #fff;
  font-size: 14px;
  margin-bottom: 10px;
`;

const Neighboor = styled.div`
  font-weight: normal;
  color: #fff;
  font-size: 14px;
`;

const OrcamentButton = styled.button`
  margin-top: 20px;
  padding: 20px;
  background-color: transparent;
  border: 2px solid #fff;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`;

const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Icon = styled(FontAwesomeIcon)`
  width: 25px;
  height: 30px;
`;

const CopyRightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const Copy = styled.div`
  font-size: 12px;
  color: #fff;

  @media (max-width: 700px) {
    margin-bottom: 20px;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Link = styled.a`
  font-size: 12px;
  color: #fff;
  margin-left: 20px;

  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

function Footer() {
  return (
    <BackgroundFooter>
      <FooterWrapper>
        {/* <Column>
          <Subtitle>Reservamos uma super condição para você</Subtitle>
          <Title>Faça seu orçamento agora mesmo!</Title>

          <OrcamentButton>Acessar Calculadora</OrcamentButton>
        </Column> */}

        <Row>
          <Column>
            <Subtitle style={{ opacity: "0.5" }}>Endereço Matriz</Subtitle>
            <Address>
              <Street>Rua Tufy Salomão, 3219</Street>
              <Neighboor>Itararé, Teresina-Piauí</Neighboor>
            </Address>
          </Column>

          <Column>
            <Subtitle style={{ opacity: "0.5" }}>Telefone</Subtitle>
            <Address>
              <Neighboor>86 9972-6847</Neighboor>
            </Address>
          </Column>

          <Column>
            <Subtitle style={{ opacity: "0.5" }}>Confira nossas redes</Subtitle>
            <IconsWrapper>
              <Icon size="2x" color={"#fff"} icon={faInstagram} />
              <Icon size="2x" color={"#fff"} icon={faFacebookF} />
              <Icon size="2x" color={"#fff"} icon={faYoutube} />
              <Icon size="2x" color={"#fff"} icon={faLinkedin} />
            </IconsWrapper>
          </Column>
        </Row>

        <CopyRightWrapper>
          <Copy>
            © 2021 Mads Engenharia Ltda - Todos os direitos reservados. CNPJ:
            18.269.815/0001-36.
          </Copy>

          <LinksWrapper>
            <Link href="/privacidade">Termos e Políticas de Privacidade</Link>
          </LinksWrapper>
        </CopyRightWrapper>
      </FooterWrapper>
    </BackgroundFooter>
  );
}

export default Footer;
