import React from 'react';
import styled from 'styled-components';
import { shape, string } from 'prop-types';
import { withRouter } from 'react-router-dom';
import media from '../../assets/theme/media';
import Nav from './Nav';
import Social from './Social';

const Grid = styled.div`
  grid-area: footer;
`;

const StyledDiv = styled.div`
  display: flex;
  height: 125px;  
  align-items: center;
  justify-content: space-around;
  align-items: center;
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
  font-size: 15px;

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

const Footer = ({ location }) => (
  <Grid>
    {
      location.pathname !== '/signup' &&
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

Footer.propTypes = {
  location: shape({
    pathname: string.isRequired,
  }).isRequired,
};

export default withRouter(Footer);
