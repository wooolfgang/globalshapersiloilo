import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import FormInput from '../FormInput';
import ErrorMsg from '../../Form/ErrorMsg';

const StyledDiv = styled.div`
  width: 87.5%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
`;

const FirstStep = ({ formsStore: { orgFormErrorMsg, handleOrgFormInput } }) => (
  <StyledDiv>
    <FormInput label="Name of Organization" required id="name" onChange={handleOrgFormInput}>
      <ErrorMsg message={orgFormErrorMsg.name} />
    </FormInput>
    <FormInput label="Description of Organization" required id="description" onChange={handleOrgFormInput}>
      <ErrorMsg message={orgFormErrorMsg.description} />
    </FormInput>
    <FormInput label="Website/Social Media Page" required id="website" onChange={handleOrgFormInput}>
      <ErrorMsg message={orgFormErrorMsg.website} />
    </FormInput>
    <FormInput label="Contact Person" required id="contactPerson" onChange={handleOrgFormInput}>
      <ErrorMsg message={orgFormErrorMsg.contactPerson} />
    </FormInput>
    <FormInput label="Contact Number" required id="contactNumber" onChange={handleOrgFormInput}>
      <ErrorMsg message={orgFormErrorMsg.contactNumber} />
    </FormInput>
    <FormInput label="Organization Email" required id="email" onChange={handleOrgFormInput}>
      <ErrorMsg message={orgFormErrorMsg.email} />
    </FormInput>
    <FormInput label="Office Address" required id="address" onChange={handleOrgFormInput}>
      <ErrorMsg message={orgFormErrorMsg.address} />
    </FormInput>
  </StyledDiv>
);

export default inject('formsStore')(observer(FirstStep));

