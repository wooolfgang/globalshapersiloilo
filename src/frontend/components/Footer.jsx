import React from 'react';
import styled from 'styled-components';
import fb from '../assets/fb.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import colors from '../theme/constants';

const StyledDiv = styled.div`
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
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
`;

const Container = styled.div`
  width: 370px;
  font-size: 15px;
  margin-left: 170px;
  margin-right: 150px;

  h3 {
    margin: 0px;
    color: ${colors.secondary}
  }
`;

const SocialMediaContainer = styled.div`
  display: flex;

  img {
    width: 40px;
    height: 40px;
    margin: 10px;
  }
`;

const Footer = () => (
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
);

export default Footer;
