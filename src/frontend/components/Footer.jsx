import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import fb from '../assets/images/facebook.png';
import instagram from '../assets/images/instagram.png';
import twitter from '../assets/images/twitter.png';
import media from '../assets/theme/media';

const StyledDiv = styled.div`
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-items: center;
  background: ${props => props.theme.footer};

  ${media.tablet`
    flex-direction: column;
    height: 400px;
  `} 

  ${media.phone`
    height: 375px;
  `}
`;

const StyledNav = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;

  li {
    margin-bottom: 5px;
    cursor: pointer;
    font-family: 'Open Sans', 'sans-serif';
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
  }

  li:hover {
    text-decoration: underline;
  }

  ${media.phone`
    text-align: center;
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

const SocialMediaContainer = styled.div`
  display: flex;

  img {
    width: 40px;
    height: 40px;
    margin: 10px;
  }
`;

const Footer = ({ location }) => (
  <div>
    {
      location.pathname !== '/signup' &&
      <StyledDiv>
        <StyledNav>
          <li> Home </li>
          <li> Volunteer </li>
          <li> Organize </li>
          <li> About Us </li>
        </StyledNav>
        <Container>
          <h3> Global Shapers Iloilo © </h3>
          <p> The Global Shapers Community is a network of young people driving dialogue, action and change. </p>
        </Container>
        <SocialMediaContainer>
          <a href="#"><img src={fb} /></a>
          <a href="#"><img src={twitter} /></a>
          <a href="#"><img src={instagram} /></a>
        </SocialMediaContainer>
      </StyledDiv>
    }
  </div>
);

export default withRouter(Footer);
