import React from 'react';
import { inject, observer } from 'mobx-react';
import { instanceOf } from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import media from '../../assets/theme/media';
import User from './User';
import UserStore from '../../stores/UserStore';
import SigninLink from '../Link';

const StyledNav = styled.ul`
  list-style-type: none;
  width: 420px;
  display: flex;
  justify-content: space-around;

  ${media.tablet`
    display: none;
  `}
`;

const Header = styled.span`
  font-size: .90em;
  display: block;
  margin-bottom: 0.5px;
  font-family: ${props => props.theme.fontThree};
`;

const Tagline = styled.span`
  font-size: .82em;
  font-family: ${props => props.theme.fontTwo};
`;

const LeftContainer = styled.div`
  margin-left: 30px;
  display: flex;
  min-width: 120px;
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

const Nav = ({ userStore }) => (
  <StyledNav>
    <StyledLink to="/projects">
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

Nav.propTypes = {
  userStore: instanceOf(UserStore).isRequired,
};

export default inject('userStore')(observer(Nav));
