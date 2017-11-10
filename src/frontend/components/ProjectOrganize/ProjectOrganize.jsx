import React from 'react';
import styled from 'styled-components';
import { inject } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import Stepper from '../Stepper/Stepper';
import Step from '../Stepper/Step';
import FirstStep from './Forms/FirstStep';
import SecondStep from './Forms/FirstStep';
import ThirdStep from './Forms/FirstStep';

const StyledDiv = styled.div`
  min-height: 875px;
  position: relative;
  background: ${props => props.theme.grayOne};
`;

const Div = styled.div`
  height: 250px;
  background: ${props => props.theme.secondary};
`;

const StepperContainer = styled.div`
  position: absolute;
  margin: 0 auto;
  top: 10% !important;
  left: 0;
  right: 0;
  width: 540px;
`;

const ProjectOrganize = ({ store: { userStore } }) => {
  if (!userStore.authenticated) {
    return <Redirect to="/signin" />;
  }

  return (
    <StyledDiv>
      <Div />
      <StepperContainer>
        <Stepper
          headers={['Organization Details', 'Project Details', 'Additional Info']}
          height="650px"
          width="600px"
        >
          <Step> <FirstStep /> </Step >
          <Step> <SecondStep /> </Step>
          <Step> <ThirdStep /> </Step>
        </Stepper>
      </StepperContainer>
    </StyledDiv>
  );
};

export default inject('store')(ProjectOrganize);
