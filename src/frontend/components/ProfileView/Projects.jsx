import React from 'react';
import styled from 'styled-components';

const HeaderText = styled.h1`
  margin-top: 20px;
  font-size: 1.2em;
  font-weight: normal;
  text-align: center;
`;

const ProjectContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 15px 0px;
  border-left: 2px solid gray;
  text-align: left;
  padding: 15px;
  background: ${props => props.theme.grayOne};
`;

const StyledH2 = styled.h2`
  margin: 0;
  font-weight: normal;
  font-size: 1.15em;
  color: ${props => props.theme.tertiary};
`;

const StyledP = styled.p`
  margin: 0;
  font-size: .90em;
`;

const Projects = () => (
  <div>
    <HeaderText>Completed Projects</HeaderText>
    <ProjectContainer>
      <StyledH2>Eating tissues and slippers</StyledH2>
      <StyledP>25 October 2017</StyledP>
    </ProjectContainer>
    <ProjectContainer>
      <StyledH2>Destroying Vases</StyledH2>
      <StyledP>26 October 2017</StyledP>
    </ProjectContainer>
    <ProjectContainer>
      <StyledH2>Do literally nothing</StyledH2>
      <StyledP>28 October 2017</StyledP>
    </ProjectContainer>
  </div>
);

export default Projects;
