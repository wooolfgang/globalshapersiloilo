import React from 'react';
import styled from 'styled-components';
import { node } from 'prop-types';

const StyledHeader = styled.h2`
  font-weight: 550;
  margin: 10px;
  color: ${props => props.theme.secondary};
`;

const Header = ({ children }) => (
  <StyledHeader> {children} </StyledHeader>
);

Header.propTypes = {
  children: node.isRequired,
};

export default Header;
