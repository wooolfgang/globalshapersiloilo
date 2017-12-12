import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import media from '../../assets/theme/media';

const StyledNav = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  
  ${media.phone`
    text-align: center;
  `}
`;

const StyledLink = styled(Link) `
  display: block;
  margin-bottom: 5px;
  cursor: pointer;
  font-size: 15px;
  text-transform: uppercase;
  text-decoration: none;
  color: #333;
  font-family: ${props => props.theme.fontOne};
`;

const Nav = () => (
  <StyledNav>
    <StyledLink to="/"> Home </StyledLink>
    <StyledLink to="/projects"> Volunteer </StyledLink>
    <StyledLink to="/organize"> Organize </StyledLink>
  </StyledNav>
);

export default Nav;
