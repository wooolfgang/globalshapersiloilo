import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import HamburgerIcon from './HamburgerIcon';
import media from '../../assets/theme/media';
import Logo from './Logo';
import Nav from './Nav';

const StyledDiv = styled.div` 
  grid-area: header;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 100;
  box-shadow: ${props => props.theme.cardOne};
  ${props => props.signup && `background: ${props.theme.secondary};`};

  ${media.tablet`
    justify-content: space-around;
  `}
`;

const Header = ({ location }) => (
  <StyledDiv signup={location.pathname === '/signup'}>
    <Logo pathname={location.pathname} />
    {
      location.pathname !== '/signup' &&
      <Nav />
    }
    <HamburgerIcon />
  </StyledDiv >
);

export default withRouter(Header);
