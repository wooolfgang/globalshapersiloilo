import React from 'react';
import styled from 'styled-components';
import { Secondary } from './Buttons';

const StyledDiv = styled.div`
  height: 475px;
  background: #375D81;
  width: 100vw;
  display: flex;
`

const SectionContainer = styled.div`  
  width: 80%;
  height: 80%;
  display: flex;
  margin: auto;
`

const ProjectSearch = styled.div`
  flex: 1;
  background: #FAFAFA;
  display: flex;
`

const Container = styled.div`
  height: 70%;
  width: 70%;
  margin: auto;
  border: 2px solid #375D81;
  padding: 20px;

  h2 {
    font-family: 'Playfair Display', 'serif';
    margin: 0px;
    margin-top: 18px;
    margin-bottom: 8px;
  }

  h3 {
    font-family: 'Raleway', 'sans-serif';
    margin: 0px;
    margin-bottom: 8px;
  }
`

const LocalListings = styled.div`
  flex: 1;
  border: 2px solid #FAFAFA;
`

const SubContainer = () => (
  <StyledDiv>
    <SectionContainer>
      <ProjectSearch>
        <Container>
          <h2> What's your passion? </h2>
          <h3> We'll find the right projects for you. </h3>
          <Secondary> Find </Secondary>
        </Container>
      </ProjectSearch>
      <LocalListings>
      </LocalListings>
    </SectionContainer>
  </StyledDiv>
);

export default SubContainer;