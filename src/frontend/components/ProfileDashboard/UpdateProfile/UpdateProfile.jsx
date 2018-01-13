import React from 'react';
import styled from 'styled-components';
import AccountInfo from './AccountInfo';
import PersonalInfo from './PersonalInfo';
import ButtonsContainer from './ButtonsContainer';

const StyledDiv = styled.div`
  height: auto;
  display: grid;
  grid-template-areas: 
  '. container .'
  '. . .'
  ;
  grid-template-columns: 1fr 500px 1fr;
  grid-template-rows: 1fr 100px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr 300px 1fr;
  }
`;

const Container = styled.div`
  grid-area: container;
`;

const Line = styled.div`
  border-bottom: 1px solid lightgray;
  width: inherit;
`;

const UpdateProfile = () => (
  <StyledDiv>
    <Container>
      <PersonalInfo />
      <Line />
      <AccountInfo />
      <ButtonsContainer />
    </Container>
  </StyledDiv >
);

export default UpdateProfile;
