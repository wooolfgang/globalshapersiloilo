import React from 'react';
import styled from 'styled-components';
import { successIcon } from '../../assets/theme/images';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 125px !important;
    height: auto;
    margin: auto;
    margin-bottom: 25px; 
  }

  h1 {
    font-family: ${props => props.theme.fontThree};
  }

  h1, h2{
    margin: auto;
  }
`;

const Success = () => (
  <StyledDiv>
    <img src={successIcon} alt="successful-signup" />
    <h1> Success!  </h1>
    <h2> You have registered as part of the Global Shaper's Community!  </h2>
  </StyledDiv>
);

export default Success;
