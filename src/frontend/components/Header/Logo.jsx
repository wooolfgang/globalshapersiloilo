import React from 'react';
import styled from 'styled-components';
import logoImg from '../../assets/images/logo.png';
import logoImgInverted from '../../assets/images/logo-inverted.png';

const StyledLogo = styled.a`
  img {
    width: 100px;
    height: auto;
  }
`;

const Logo = ({ pathname }) => (
  <StyledLogo href="#">
    <img src={pathname === '/signup' ? logoImgInverted : logoImg} alt="logo" />
  </StyledLogo>
);

export default Logo;
