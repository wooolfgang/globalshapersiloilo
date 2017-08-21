import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  height: 450px;
  width: 100vw;
  background: #FAFAFA;
  display: flex;
`

const SectionContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
`

const Container = styled.div`
  width: 500px;
  height: 320px;
  border-radius: 8px;
`

const LocalListingsContainer = () => (
  <StyledDiv>
    <SectionContainer>
      <Container>
      </Container>
      <Container>
      </Container>
    </SectionContainer>
  </StyledDiv>
);

export default LocalListingsContainer;