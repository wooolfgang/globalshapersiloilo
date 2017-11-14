import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import Stepper from '../Stepper/Stepper';
import Step from '../Stepper/Step';
import FirstStep from './Steps/FirstStep';
import SecondStep from './Steps/SecondStep';
import ThirdStep from './Steps/ThirdStep';

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

const ProjectOrganize = ({ store: { userStore, viewStore } }) => {
  const { orgActiveStepIndex, orgFormHandleNextStep, orgFormHandlePrevStep, orgFormHandleLastStep } = viewStore;

  if (!userStore.isAuthenticating && !userStore.authenticated) {
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
          handleNextStep={orgFormHandleNextStep}
          handlePrevStep={orgFormHandlePrevStep}
          handleLastStep={orgFormHandleLastStep}
          activeIndex={orgActiveStepIndex}
        >
          <Step> <FirstStep /> </Step >
          <Step> <SecondStep /> </Step>
          <Step> <ThirdStep /> </Step>
        </Stepper>
      </StepperContainer>
    </StyledDiv>
  );
};

export default inject('store')(observer(ProjectOrganize));
