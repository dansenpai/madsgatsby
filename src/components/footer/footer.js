import React from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const BackgroundFooter = styled.div`
  background: linear-gradient(to right, #1488cc, #2b32b2);
`;

const FooterWrapper = styled.footer`
  padding-top: 80px;
  padding: 80px 40px 0 40px;
  max-width: 1280px;
  margin: 0 auto;
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
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 40px;
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
`;

const Copy = styled.div`
  font-size: 12px;
  color: #fff;
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
`;

function Footer() {
  return (
    <BackgroundFooter>
      <FooterWrapper>
        <Column>
          <Subtitle>Reservamos uma super condição para você</Subtitle>
          <Title>Faça seu orçamento agora mesmo!</Title>

          <OrcamentButton>Acessar Calculadora</OrcamentButton>
        </Column>

        <Row>
          <Column style={{ marginTop: 80 }}>
            <Subtitle style={{ opacity: "0.5" }}>Endereço Matriz</Subtitle>
            <Address>
              <Street>Rua Tufy Salomão, 3219</Street>
              <Neighboor>Itararé, Teresina-Piauí</Neighboor>
            </Address>
          </Column>

          <Column style={{ marginTop: 80 }}>
            <Subtitle style={{ opacity: "0.5" }}>Telefone</Subtitle>
            <Address>
              <Neighboor>86 9972-6847</Neighboor>
            </Address>
          </Column>

          <Column style={{ marginTop: 80 }}>
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
            © 2021 EcoPower Energia Solar - Todos os direitos reservados. CNPJ:
            18.269.815/0001-36.
          </Copy>

          <LinksWrapper>
            <Link href="/politica-de-privacidade">Termos e Políticas de Privacidade</Link>
          </LinksWrapper>
        </CopyRightWrapper>
      </FooterWrapper>
    </BackgroundFooter>
  );
}

export default Footer;