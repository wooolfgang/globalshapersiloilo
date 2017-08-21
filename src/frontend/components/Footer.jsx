import React from 'react';
import styled from 'styled-components';
import fb from '../assets/fb.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';

const StyledDiv = styled.div`
  height: 125px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const StyledNav = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;

  li {
    padding: 5px;
    cursor: pointer;
    font-family: 'Roboto', 'sans-serif';
  }
`

const SocialMediaContainer = styled.div`
  display: flex;

  img {
    width: 40px;
    height: 40px;
    margin: 10px;
  }
`

const Footer = () => (
  <StyledDiv>
    <StyledNav>
      <li> Home </li>
      <li> Volunteer </li>
      <li> About Us </li>
    </StyledNav>
    <SocialMediaContainer>
      <a href="#"><img src={fb}/></a>
      <a href="#"><img src={twitter}/></a>
      <a href="#"><img src={instagram}/></a>
    </SocialMediaContainer>
  </StyledDiv>
);

export default Footer;