import React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import FormInput from '../FormInput';
import FormHeader from './FormHeader';
import ErrorMsg from '../../Form/ErrorMsg';

const StyledDiv = styled.div`
  width: 87.5%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
`;

const SecondStep = ({ formsStore: { projectFormInputsFirstErrorMsg, handleProjectFormFirstInput } }) => (
  <StyledDiv>
    <FormHeader> What is the name of the Project / Initiative where you need volunteers in? </FormHeader>
    <FormInput label="Your answer" required id="name" onChange={handleProjectFormFirstInput}>
      <ErrorMsg message={projectFormInputsFirstErrorMsg.name} />
    </FormInput>
    <FormHeader info='(An aspirational goal; Eg: "We aim to solve youth unemployment in Iloilo City")'> What is the challenge that the project aims to address? </FormHeader>
    <FormInput label="Your answer" required id="projectChallenge" onChange={handleProjectFormFirstInput}>
      <ErrorMsg message={projectFormInputsFirstErrorMsg.projectChallenge} />
    </FormInput>
    <FormHeader info='(Explain ways on how volunteers may benefit/be incentivized by participating in your cause. Note that this does not necessarily mean material/monetary benefits - e.g. "gain more understanding on disaster response systems in the city" or "receive a certificate of appreciation")'>Why should they volunteer for this project? </FormHeader>
    <FormInput label="Your answer" required id="volunteerReason" onChange={handleProjectFormFirstInput} >
      <ErrorMsg message={projectFormInputsFirstErrorMsg.volunteerReason} />
    </FormInput>
  </StyledDiv>
);

export default inject('formsStore')(observer(SecondStep));

