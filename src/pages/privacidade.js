import React from "react";
import styled from "styled-components";
import Logo from "../components/logo/logo";

const Page = styled.div`
  padding-top: 30px;
`;

const Heading1 = styled.h1`
  font-size: 18px;
  text-align: center;
  color: #888;

  @media (max-width: 700px) {
    font-size: 16px;
    padding: 0 20px;
  }
`;

const Heading2 = styled.h2`
  font-size: 18px;
  text-align: center;
  margin: 5px;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const Paragraph = styled.p`
  text-align: ${({ center }) => (center ? "center" : "left")};
  font-weight: 300;
  font-size: 14px;
  padding: ${({ padded }) => (padded ? "0 120px" : "5px 80px")};

  @media (max-width: 700px) {
    padding: ${({ padded }) => (padded ? "0 20px" : "0px 10px")};
  }
`;

const Backgrounded = styled.div`
  background: #00408a;
  color: #fff;
  padding: 10px;
`;

function Privacidade() {
  return (
    <Page>
      <Center>
        <Logo />
      </Center>

      <Heading1>POLÍTICA DE PRIVACIDADE DA MADS ENGENHARIA LTDA</Heading1>

      <Backgrounded>
        <Heading2>
          A Empresa Mads Engenharia Ltda valoriza sua segurança.
        </Heading2>
        <Paragraph style={{ fontSize: 14 }}>
          Por favor, leia com atenção a política de privacidade para conhecer os
          termos e condições em que suas informações pessoais serão armazenadas,
          utilizadas e protegidas em nosso site. Ao fornecer informações
          pessoais ou navegar no site, você estará automaticamente concordando
          com as regras de utilização, proteção e segurança aqui estabelecidas.
        </Paragraph>
      </Backgrounded>

      <Heading1>CONDIÇÕES GERAIS E INFORMAÇÕES PESSOAIS.</Heading1>
      <Paragraph>
        O usuário do site fornece seu nome completo e e-mail. O fornecimento de
        dados pessoais corretos no cadastro é uma condição necessária para a
        utilização do site. O acesso ao site também poderá ser feito através de
        login pelo Facebook, Google e Apple.
      </Paragraph>

      <Paragraph>
        Estes dados nunca serão vendidos ou cedidos para terceiros, a não ser em
        caso de exigência legal. Os dados do perfil do usuário são
        compartilhados publicamente em sistemas de busca e dentro da plataforma,
        sendo permitido ao usuário modificar tal configuração para que seu
        perfil não apareça nos resultados de busca de tais ferramentas.
      </Paragraph>

      <Paragraph>
        O usuário não irá fornecer qualquer informação pessoal falsa no site,
        nem criar uma conta para ninguém além de si mesmo sem permissão.
      </Paragraph>

      <Paragraph>
        O usuário deve manter suas informações de contato precisas e
        atualizadas.
      </Paragraph>

      <Paragraph>
        As informações solicitadas aos usuários são as necessárias à realização
        dos serviços prestados pela Empresa Mads Engenharia Ltda e ficarão
        armazenadas para fins operacionais e, quando expressamente autorizado,
        para relacionamento comercial com os mesmos.
      </Paragraph>

      <Paragraph>
        As informações pessoais coletadas no site são armazenadas com padrões
        rígidos de confidencialidade e segurança e nenhum documento, informação
        ou registro sob a guarda da Empresa Mads Engenharia Ltda é fornecido a
        terceiros, exceto se expressamente autorizado pelo usuário ou mediante
        ordem judicial ou por determinação legal.
      </Paragraph>

      <Paragraph>
        Como o sítio eletrônico da Empresa Mads Engenharia Ltda permite a
        interação com redes sociais como o Facebook, Instragram, Google e Apple,
        as informações obtidas estão sujeitas às configurações de privacidade do
        Usuário na rede social.
      </Paragraph>
      <Paragraph>
        A coleta de informações será feita através de e-mail e cadastro em
        formulário próprio. Além dos dados fornecidos, pela Empresa Mads
        Engenharia Ltda pode captar dados de navegação por meio de "cookies".
      </Paragraph>
      <Paragraph>
        Os registros de acessos (IP´s, dados e datas de acessos) serão
        armazenados por 6 (seis) meses nos termos que dispõe a legislação e
        somente poderão ser solicitados judicialmente conforme o disposto no
        inciso I do artigo 15 da Lei 13.709/18.
      </Paragraph>
      <Paragraph>
        Os dados podem ser removidos ou anonimizados a pedido do usuário,
        excetuando os casos em que a lei oferecer outro tratamento.
      </Paragraph>
      <Paragraph>
        Ainda, os dados pessoais do usuário apenas podem ser conservados após o
        término de seu tratamento nas seguintes hipóteses previstas no artigo 16
        da referida lei:
      </Paragraph>
      <Paragraph padded>
        <strong>I</strong> - cumprimento de obrigação legal ou regulatória pelo
        controlador; <br />
        <strong>II</strong> - estudo por órgão de pesquisa, garantida, sempre
        que possível, a anonimização dos dados pessoais; <br />
        <strong>III</strong> - transferência a terceiro, desde que respeitados
        os requisitos de tratamento de dados dispostos nesta Lei; <br />
        <strong>IV</strong>- uso exclusivo do controlador, vedado seu acesso por
        terceiro, e desde que anonimizados os dados.
        <br />
      </Paragraph>

      <Paragraph>
        Por meio de navegação e/ou cadastro, o usuário autoriza, expressando seu
        consentimento sobre a coleta, uso, armazenamento e tratamento de dados
        pessoais. Nossas políticas foram elaboradas em conformidade com a Lei
        Geral de Proteção de Dados Pessoais (Lei 13.709/18), o Marco Civil da
        Internet (Lei 12.965/14) e o Regulamento da UE n. 2016/6790). Ainda, as
        políticas poderão ser atualizadas em decorrência de eventual atualização
        normativa, razão pela qual se convida o usuário a consultar
        periodicamente esta seção.
      </Paragraph>

      <Backgrounded>
        <Heading2>SEGURANÇA</Heading2>
      </Backgrounded>

      <Paragraph>
        A Empresa Mads Engenharia Ltda busca garantir segurança e privacidade
        dos usuários do site, assim os mesmos não deverão:
      </Paragraph>

      <Paragraph padded>
        • Utilizar o site com propósitos ilegais; <br />
        • Propagar vírus de computador, programas invasivos ou outros que causem
        danos permanentes ou temporários; <br />
        • Transmitir tipos ou quantidades de dados que causem falhas em serviços
        ou equipamentos; <br />
        • Usar a rede para tentar ou realizar acesso não autorizado; <br />
        • Forjar endereços de máquinas, de rede ou de correio eletrônico na
        tentativa de responsabilizar terceiros ou ocultar a identidade ou
        autoria; <br />
        • Violar a privacidade de outros usuários; <br />
        • Destruir ou corromper dados e informações de outros usuários; <br />•
        Violar direito autoral alheio reproduzindo material sem autorização.{" "}
        <br />
      </Paragraph>

      <Backgrounded>
        <Heading2>SIGILO E CONFIDENCIALIDADE</Heading2>
      </Backgrounded>

      <Paragraph>
        As partes acordam que as informações constantes do site hospedado, dos
        e-mails que por ele trafegarem e dos bancos de dados utilizados pelo
        USUÁRIO estão cobertas pela cláusula de sigilo e confidencialidade, não
        podendo o A Empresa Mads Engenharia Ltda, ressalvados os casos de ordem,
        pedido ou determinação judicial de qualquer espécie a fim de esclarecer
        fatos ou circunstâncias e instruir investigação, inquérito e denúncia em
        curso, revelar as informações a terceiros.
      </Paragraph>

      <Paragraph>
        A Empresa Mads Engenharia Ltda não será responsável por violações dos
        dados e informações acima referidas resultantes de atos de terceiros ou
        de pessoas autorizadas pelo USUÁRIO e nem daquelas resultantes da ação
        criminosa ou irregular de terceiros (“hackers”).
      </Paragraph>

      <Backgrounded>
        <Heading2>DA UTILIZAÇÃO DO SERVIÇO</Heading2>
      </Backgrounded>

      <Paragraph>
        A Empresa Mads Engenharia Ltda não se responsabiliza pelo preenchimento
        dos cadastros para a formalização de cotação de preços quanto das placas
        solares, sendo este de única e exclusiva responsabilidade do mesmo,
        podendo responder civil e criminalmente pelo preenchimento com a
        intenção e má-fé, ou falsificação ideológica.
      </Paragraph>

      <Backgrounded>
        <Heading2>O que nós coletamos</Heading2>
      </Backgrounded>

      <Paragraph>
        <strong>Podemos coletar as seguintes informações:</strong>
      </Paragraph>

      <Paragraph>
        nome <br />
        informações de contato, <br />
        incluindo endereço de e-mail
        <br />
        Informações demográficas, como código postal, preferências e interesses{" "}
        <br />
        outras informações relevantes para pesquisas e / ou ofertas de clientes{" "}
        <br />
      </Paragraph>

      <Paragraph>
        <strong>O que fazemos com a informação que recolhemos</strong>
      </Paragraph>

      <Paragraph>
        • Precisamos dessas informações para entender suas necessidades e
        fornecer um serviço melhor e, em particular, pelos seguintes motivos:
        <br />
        • Registro interno. <br />• Podemos usar as informações para melhorar
        nossos produtos e serviços. <br />• Podemos enviar periodicamente
        e-mails promocionais sobre novos produtos, ofertas especiais ou outras
        informações que achamos que você pode achar interessante usando o
        endereço de e-mail que você forneceu. <br />
        • De tempos em tempos, podemos também usar suas informações para
        contatá-lo para fins de pesquisa de mercado. <br />
        Podemos entrar em contato com você por e-mail, telefone, fax ou correio.
        Podemos usar as informações para personalizar o site de acordo com seus
        interesses. <br />
      </Paragraph>

      <Backgrounded>
        <Paragraph center>
          O usuário se declara ciente da política de privacidade sa empresa Mads
          Engenharia Ltda, obrigando-se a cumprir as disposições aqui contidas.
        </Paragraph>
      </Backgrounded>
    </Page>
  );
}

export default Privacidade;
