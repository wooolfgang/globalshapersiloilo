import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { Link, withRouter } from 'react-router-dom';
import logoImg from '../assets/logo.png';
import logoImgInverted from '../assets/logo-inverted.png';
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
  ${props => props.signup && `background: ${colors.secondary};`};

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
  width: 420px;
  display: flex;
  justify-content: space-around;

  ${media.tablet`
    display: none;
  `}
`;

const StyledLink = styled(Link) `
  cursor: pointer;
  padding: 10px;
  font-family: 'Open Sans', 'sans-serif';
  border-left: 1px solid lightgray;
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

const LeftContainer = styled.div`
  margin-left: 30px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;


const User = styled.div`
  padding: 15px;
  border: 1px solid ${colors.secondary};
  border-radius: 999px;

  #user, #logout {
    padding: 0px;
    margin: 0px;
  }

  #user {
    font-size: 17px;
  }

  #logout {
    font-size: 11px;
    text-decoration: underline;
    cursor: pointer;
    border: none;
    background: none;
  }
`;

const SigninLink = styled(Link) `
  display: inline-block !important;
  width: 135px;
  padding: 15px;
  text-decoration: none;
  font-family: 'Raleway', 'sans-serif';
  color: ${colors.secondary}
`;

const Header = ({ location, store: { userStore } }) => (
  <StyledDiv signup={location.pathname === '/signup'}>
    <StyledLogo href="#">
      <img src={location.pathname === '/signup' ? logoImgInverted : logoImg} alt="logo" />
    </StyledLogo>
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
        <LeftContainer>
          {
            userStore.authenticated ?
              <User>
                <p id="user">  {userStore.currentUser.username} </p>
                <button id="logout" onClick={userStore.logout}> Logout </button>
              </User> :
              <SigninLink to="/signin" login> Sign in / Sign up </SigninLink>
          }
        </LeftContainer>
      </StyledNav>
    }
    <HamburgerIcon />
  </StyledDiv >
);

export default inject('store')(withRouter(observer(Header)));
