import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h1`
  font-size: 18px;
  margin-bottom: 20px;
  margin-top: 0px;
`;

const StyledHelper = styled.p`
  margin: 0px;
  margin-top: 5px;
  font-size: 11.5px;
`;

const Header = ({ children, info }) => (
  <StyledHeader>
    {children}
    <StyledHelper> {info} </StyledHelper>
  </StyledHeader>
);

export default Header;
