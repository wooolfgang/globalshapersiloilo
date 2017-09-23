import React from 'react';
import styled from 'styled-components';
import logoImg from '../assets/logo.png';
import media from '../theme/media';
import HamburgerIcon from './HamburgerIcon';
import colors from '../theme/constants';

const StyledDiv = styled.div`
  width: 100vw;
  height: 120px;;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #C4D7ED;

  ${media.tablet`
    justify-content: space-around;
  `}
`;

const StyledLogo = styled.a`
  img {
    width: 120px;
    height: auto;
  }
`;

const StyledNav = styled.ul`
  list-style-type: none;
  width: 400px;
  display: flex;
  justify-content: space-around;

  ${media.tablet`
    display: none;
  `}
`;

const StyledList = styled.li`
  cursor: pointer;
  padding: 10px;
  border-left: 1px solid lightgray;

  :hover {
    border-left: 1px solid ${colors.secondary};
    color: ${colors.secondary};
  }

  span:nth-child(1) {
    text-transform: uppercase;
    font-size: 18px;
    display: block;
    margin-bottom: 2px;
  }
  
  span:nth-child(2) {
    font-size: 14px;
    font-family: 'Raleway', 'sans-serif'; 
    text-decoration: 'underline';
  }
`;

const Header = () => (
  <StyledDiv>
    <StyledLogo href="#"><img src={logoImg} /></StyledLogo>
    <StyledNav>
      <StyledList>
        <span> Volunteer </span>
        <span> Find a Cause </span>
      </StyledList>
      <StyledList>
        <span> Organize </span>
        <span> Start a Cause </span>
      </StyledList>
      <StyledList>
        <span> About </span>
      </StyledList>
    </StyledNav>
    <HamburgerIcon />
  </StyledDiv>
);

export default Header;
