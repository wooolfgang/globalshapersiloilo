import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 60px;
  display: flex;
  width: 95%;
  margin: auto;
  justify-content: flex-end;
  align-items: flex-start;
`;

const Back = styled.button`
  border: none;
  width: 80px;
  height: 30px;
  font-size: 15px;
  cursor: pointer;
  border-radius: 2px;
  outline: none;
  color: #333;
  transition-duration: .2s;
  margin: 2px;
  ${props => props.faded && 'color: gray;'};

  :hover {
    background: lightgray;
  }

  :disabled {
    background: none;
  }
`;

const Next = styled.button`
  border: none;
  color: white;
  width: 80px;
  height: 30px;
  font-size: 15px;
  cursor: pointer;
  transition-duration: .2s;
  border-radius: 2px;
  outline: none;
  margin: 2px;
  background: ${props => props.theme.buttonPrimary};

  :hover {
    background: ${props => props.theme.buttonPrimaryDarker};
  }
`;

const StepButtons = ({ activeIndex, lastIndex, handleNextStep, handlePreviousStep }) => (
  <StyledDiv>
    <Back onClick={handlePreviousStep} disabled={activeIndex === 0} faded={activeIndex === 0}> Back </Back>
    <Next onClick={handleNextStep}> {activeIndex === lastIndex - 1 ? 'Finish' : 'Next'} </Next>
  </StyledDiv>
);

export default StepButtons;
