import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';
import { logo, invertedLogo } from '../../assets/theme/images';

const StyledLogo = styled.a`
  img {
    width: 85px;
    height: auto;
  }
`;

const Logo = ({ pathname }) => (
  <StyledLogo href="#">
    <img src={pathname === '/signup' ? invertedLogo : logo} alt="logo" />
  </StyledLogo>
);

Logo.propTypes = {
  pathname: string.isRequired,
};

export default Logo;
