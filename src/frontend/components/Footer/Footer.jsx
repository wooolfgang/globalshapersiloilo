import React from 'react';
import styled from 'styled-components';
import { shape, string, bool } from 'prop-types';
import { withRouter } from 'react-router-dom';
import media from '../../assets/theme/media';
import Nav from './Nav';
import Social from './Social';

const Grid = styled.div`
  grid-area: footer;
`;

const StyledDiv = styled.div`
  display: flex;
  height: 115px;  
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid rgba(0,0,0,.05)!important;

  ${media.tablet`
    flex-direction: column;
    height: 400px;
  `} 

  ${media.phone`
    height: 375px;
  `}
`;

const Container = styled.div`
  width: 370px;
  font-size: .8em;

  h3 {
    margin: 0px;
    color: ${props => props.theme.secondary}
  }

  ${media.tablet`
    text-align: center;
  `}

  ${media.phone`
    width: 300px;
  `}
`;

const Footer = ({ location, authenticated, isAuthenticating }) => {
  if (isAuthenticating) return null;
  if (authenticated) return null;
  return (
    <Grid>
      {
        (location.pathname === '/' || location.pathname === '/signin') &&
        <StyledDiv>
          <Nav />
          <Container>
            <h3> Global Shapers Iloilo © </h3>
            <p> The Global Shapers Community is a network of young people driving dialogue, action and change. </p>
          </Container>
          <Social />
        </StyledDiv>
      }
    </Grid>
  );
};

Footer.propTypes = {
  location: shape({
    pathname: string.isRequired,
  }).isRequired,
  authenticated: bool.isRequired,
  isAuthenticating: bool.isRequired,
};

export default withRouter(Footer);
