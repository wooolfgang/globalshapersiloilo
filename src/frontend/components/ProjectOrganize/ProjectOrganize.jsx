import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';
import Stepper from '../Stepper/Stepper';
import Step from '../Stepper/Step';
import FirstStep from './Steps/FirstStep';
import SecondStep from './Steps/SecondStep';
import ThirdStep from './Steps/ThirdStep';
import SuccessModal from './SuccessModal';

const StyledDiv = styled.div`
  min-height: 875px;
  position: relative;
  background: ${props => props.theme.grayOne};
`;

const Div = styled.div`
  height: 250px;
  background: #667db6;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #667db6, #0082c8, #0082c8, #667db6);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #667db6, #0082c8, #0082c8, #667db6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const StepperContainer = styled.div`
  position: absolute;
  margin: 0 auto;
  top: 10% !important;
  left: 0;
  right: 0;
  width: 540px;
`;

const ProjectOrganize = ({ userStore, viewStore, formsStore }) => {
  const { orgActiveStepIndex } = viewStore;
  const { orgFormHandleNextStep, orgFormHandlePrevStep } = formsStore;

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
          activeIndex={orgActiveStepIndex}
        >
          <Step> <FirstStep /> </Step >
          <Step> <SecondStep /> </Step>
          <Step> <ThirdStep /> </Step>
        </Stepper>
      </StepperContainer>
      <SuccessModal />
    </StyledDiv>
  );
};

export default inject('userStore', 'viewStore', 'formsStore')(observer(ProjectOrganize));
