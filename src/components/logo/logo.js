import React from "react";
import LogoImage from "../../images/logo.png";
import styled from 'styled-components';

const Image = styled.img`
  height: 50px;
`;

function Logo(props) {
  return (
    <div>
      <Image src={LogoImage} />
    </div>
  );
}

export default Logo;
