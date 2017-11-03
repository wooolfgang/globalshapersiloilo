import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import HamburgerIcon from './HamburgerIcon';
import media from '../../assets/theme/media';
import Logo from './Logo';
import Nav from './Nav';

const StyledDiv = styled.div`
  width: 100vw;
  height: 100px;;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 99999;
  box-shadow: ${props => props.theme.cardOne};
  ${props => props.signup && `background: ${props.theme.secondary};`};

  ${media.tablet`
    justify-content: space-around;
  `}
`;

const Header = ({ location, store: { userStore } }) => {
  if (userStore.isAuthenticating) {
    return null;
  }

  return (
    <StyledDiv signup={location.pathname === '/signup'}>
      <Logo pathname={location.pathname} />
      {
        location.pathname !== '/signup' &&
        <Nav />
      }
      <HamburgerIcon />
    </StyledDiv >
  );
};

export default inject('store')(withRouter(observer(Header)));
