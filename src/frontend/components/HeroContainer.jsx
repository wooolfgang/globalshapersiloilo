import React from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import { Primary } from './Buttons';
import heroImg from '../assets/hero-img.jpg';

const StyledDiv = styled.div`
  height: 450px;
  background: url(${heroImg}) no-repeat center center fixed;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: white;
    font-family: 'Raleway', 'sans-serif';
  }
`

const HeroContainer = ({ rootStore }) => (
  <StyledDiv>
    <h1> Find a cause that's worth joining for. </h1>
    <Primary onClick={rootStore.uiStore.onSignupModalView}> Call to Action </Primary>
  </StyledDiv>
);

export default inject('rootStore')(observer(HeroContainer));