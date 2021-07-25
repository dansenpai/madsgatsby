import React from "react";
import styled, { css } from "styled-components";
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

const Address = styled.div`
  ${({ border }) =>
    border &&
    css`
      border-right: 1px solid rgba(255, 255, 255, 1);
      margin-right: 15px;
      padding-right: 10px;
    `}
`;

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
  @media (max-width: 700px) {
    text-align: ${({ center }) => (center ? "center" : "left")};
  }
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
  justify-content: center;
`;

const Icon = styled(FontAwesomeIcon)`
  width: 25px;
  height: 30px;
  cursor: pointer;
  margin: 0 10px;
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
  function openFacebook() {
    window.open("https://www.facebook.com/mads_engenharia-100725998328196/");
  }

  function openInstagram() {
    window.open("https://instagram.com/mads_engenharia?igshid=f79yjsi49h6o");
  }

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
              <Neighboor center>Itararé, Teresina-Piauí</Neighboor>
            </Address>

            <Subtitle style={{ opacity: "0.5", marginTop: 20 }}>
              Endereço filial
            </Subtitle>
            <Address>
              <Street>BR 316 Km 361, S/N</Street>
              <Neighboor>Cohab III, Cond Gran Ville, Bacabal-MA</Neighboor>
            </Address>
          </Column>

          <Column>
            <Subtitle style={{ opacity: "0.5" }}>Telefones</Subtitle>
            <div style={{ display: "flex" }}>
              <Address border>
                <Subtitle style={{ opacity: "0.5" }}>Piauí</Subtitle>
                <Neighboor>(86) 99915-7513</Neighboor>
                <Neighboor>(86) 98893-7435</Neighboor>
              </Address>
              <Address>
                <Subtitle style={{ opacity: "0.5" }}>Maranhão</Subtitle>
                <Neighboor>(99) 99231-5062 </Neighboor>
                <Neighboor>(99) 98111-0182 </Neighboor>
              </Address>
            </div>
          </Column>

          <Column>
            <Subtitle style={{ opacity: "0.5" }}>Confira nossas redes</Subtitle>
            <IconsWrapper>
              <Icon
                onClick={openInstagram}
                size="2x"
                color={"#fff"}
                icon={faInstagram}
              />
              <Icon
                onClick={openFacebook}
                size="2x"
                color={"#fff"}
                icon={faFacebookF}
              />
              {/* <Icon size="2x" color={"#fff"} icon={faYoutube} /> */}
              {/* <Icon size="2x" color={"#fff"} icon={faLinkedin} /> */}
            </IconsWrapper>
          </Column>
        </Row>

        <CopyRightWrapper>
          <Copy>
            © 2021 Mads Engenharia Ltda Todos os direitos reservados. CNPJ:
            32.148.032/0001-25.
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
