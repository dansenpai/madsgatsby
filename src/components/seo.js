import React from "react";
import { Helmet } from "react-helmet";

const description = `A MADS ENGENHARIA é uma empresa piauiense.
A nossa visão é ser a melhor empresa do Nordeste em soluções energéticas, pela qualidade na prestação dos serviços, rentabilidade e responsabilidade socioambiental.
O nosso objetivo é satisfazer nossos clientes com foco na excelência do nosso trabalho.
Faça do nosso Sol sua fonte de Economia, venha gerar sua própria energia, a energia solar que move o mundo!`;
const logo = "/logo.png";
const title = "Mads Engenharia Ltda";

function SEO(props) {
  return (
    <Helmet title={title} titleTemplate={`${title} %s`}>
      <meta name="description" content={description} />
      <meta name="image" content={logo} />
      <meta property="og:url" content={"https://madseng.com.br"} />
      <meta property="og:title" content={title} />

      <meta property="og:description" content={description} />
      <meta property="og:image" content={logo} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={logo} />
    </Helmet>
  );
}

export default SEO;
