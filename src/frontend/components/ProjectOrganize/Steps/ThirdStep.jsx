import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
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

const Flex = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 12px;
    margin: 0px 10px;
  }
`;

const ThirdStep = ({ store: { formsStore: { handleProjectFormSecondInput, projectFormInputsSecondErrorMsg } } }) => (
  <StyledDiv>
    <FormHeader info="Eg. Volunteer for Relief Operations -- to distribute relief goods in evacuation centers; Eg.2: Social Media Volunteer -- to manage the social media postings in the organization's page."> Task Name and Description </FormHeader>
    <FormInput label="Your answer" id="taskDescription" required onChange={handleProjectFormSecondInput} >
      <ErrorMsg message={projectFormInputsSecondErrorMsg.taskDescription} />
    </FormInput>
    <FormHeader> How many volunteers do you need? </FormHeader>
    <FormInput label="Your answer" required id="volunteersNeeded" onChange={handleProjectFormSecondInput} >
      <ErrorMsg message={projectFormInputsSecondErrorMsg.volunteersNeeded} />
    </FormInput>
    <FormHeader> How many hours will the volunteer(s) need to spend to complete this? </FormHeader>
    <FormInput label="Your answer" required id="volunteerHoursNeeded" onChange={handleProjectFormSecondInput} >
      <ErrorMsg message={projectFormInputsSecondErrorMsg.volunteerHoursNeeded} />
    </FormInput>
    <FormHeader> Timespan of the project </FormHeader>
    <Flex>
      <span> From: </span><input type="date" onChange={handleProjectFormSecondInput} id="timespanFrom" />
      <span> To: </span><input type="date" onChange={handleProjectFormSecondInput} id="timespanUntil" />
      <ErrorMsg message={projectFormInputsSecondErrorMsg.timespanFrom} />
      <ErrorMsg message={projectFormInputsSecondErrorMsg.timespanUntil} />
    </Flex>
  </StyledDiv>
);

export default inject('store')(observer(ThirdStep));

