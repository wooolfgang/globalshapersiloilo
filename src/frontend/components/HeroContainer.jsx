import React from 'react';
import styled from 'styled-components';
import { Primary } from './Buttons';

const StyledDiv = styled.div`
  height: 450px;
  background: #375D81;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: white;
    font-family: 'Raleway', 'sans-serif';
  }
`

const HeroContainer = () => (
  <StyledDiv>
    <h1> Find a cause that's worth joining for. </h1>
    <Primary> Call to Action </Primary>
  </StyledDiv>
);

export default HeroContainer;