import React from 'react';
import styled from 'styled-components';
import OrganizeFormInput from '../OrganizeFormInput';

const StyledDiv = styled.form`
  width: 87.5%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;
`;

const FirstStep = () => (
  <StyledDiv>
    <OrganizeFormInput label="Name of Organization" required />
    <OrganizeFormInput label="Description of Organization" required />
    <OrganizeFormInput label="Website/Social Media Page" required />
    <OrganizeFormInput label="Contact Person" required />
    <OrganizeFormInput label="Contact Number" required />
    <OrganizeFormInput label="Organization Email" required />
    <OrganizeFormInput label="Office Address" required />
  </StyledDiv>
);

export default FirstStep;

