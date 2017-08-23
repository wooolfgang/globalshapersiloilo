import React from 'react';
import styled from 'styled-components';
import media from '../theme/media';

const StyledDiv = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  display: none;

  span {
    border: 1px solid #333;
  }

  ${media.tablet`
    display: flex;
  `}
`

const HamburgerIcon = () => (
  <StyledDiv>
    <span /> 
    <span /> 
    <span /> 
  </StyledDiv>
);

export default HamburgerIcon;