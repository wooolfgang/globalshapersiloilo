import React from 'react';
import styled from 'styled-components';
import { string, shape } from 'prop-types';
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
  ${props => props.signup && `background: #667db6;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #667db6, #0082c8, #0082c8, #667db6);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #667db6, #0082c8, #0082c8, #667db6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
   `};

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

Header.propTypes = {
  location: shape({
    pathname: string.isRequired,
  }).isRequired,
};

export default withRouter(Header);
