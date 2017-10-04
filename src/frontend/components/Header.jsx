import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
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
  border-bottom: 1px solid #FAFAFA;

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
  width: 480px;
  display: flex;
  justify-content: space-around;

  ${media.tablet`
    display: none;
  `}
`;

const StyledLink = styled(Link) `
  cursor: pointer;
  padding: 10px;
  border-left: 1px solid lightgray;
  font-family: 'Open Sans', 'sans-serif';
  text-decoration: none !important;
  color: #333;

  ${props => props.login && 'font-size: 16px;'};

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

const Header = ({ location }) => (
  <StyledDiv>
    <StyledLogo href="#"><img src={logoImg} /></StyledLogo>
    {
      location.pathname !== '/signup' &&
      <StyledNav>
        <StyledLink to="/">
          <span> Volunteer </span>
          <span> Find a Cause </span>
        </StyledLink>
        <StyledLink to="/">
          <span> Organize </span>
          <span> Start a Cause </span>
        </StyledLink>
        <StyledLink to="/">
          <span> About </span>
        </StyledLink>
        <StyledLink to="/signin" login> Sign in / Sign up </StyledLink>
      </StyledNav>
    }
    <HamburgerIcon />
  </StyledDiv>
);

export default withRouter(Header);
