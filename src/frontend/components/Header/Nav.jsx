import React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import media from '../../assets/theme/media';
import User from './User';

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
  padding: 8px;
  text-decoration: none !important;
  color: #333;
  font-family: ${props => props.theme.fontOne};
  ${props => props.login && 'font-size: 16px;'};

  :hover {
    color: ${props => props.theme.secondary};
  }
`;

const Header = styled.span`
  font-size: 16.5px;
  display: block;
  margin-bottom: 2px;
  font-family: ${props => props.theme.fontThree};
`;

const Tagline = styled.span`
  font-size: 14px;
  font-family: ${props => props.theme.fontTwo};
`;

const LeftContainer = styled.div`
  margin-left: 30px;
  display: flex;
  min-width: 120px;
`;

const SigninLink = styled(Link) `
  display: inline-block !important;
  width: 135px;
  margin-top: 15px;
  font-size: 16px;
  text-decoration: none;
  font-family: ${props => props.theme.fontTwo};
  color: ${props => props.theme.secondary};

  :hover {
    text-decoration: underline
  }
`;

const Nav = ({ store: { userStore } }) => (
  <StyledNav>
    <StyledLink to="/find">
      <Header> Volunteer </Header>
      <Tagline> Find a Cause </Tagline>
    </StyledLink>
    <StyledLink to="/organize">
      <Header> Organize </Header>
      <Tagline> Start a Cause </Tagline>
    </StyledLink>
    <LeftContainer>
      {
        !userStore.isAuthenticating &&
        <LeftContainer>
          {
            userStore.authenticated ?
              <User />
              :
              <SigninLink to="/signin"> Sign in / Sign up </SigninLink>
          }
        </LeftContainer>
      }
    </LeftContainer>
  </StyledNav>
);

export default inject('store')(observer(Nav));
