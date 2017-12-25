import React from 'react';
import styled from 'styled-components';

const DetailsContainer = styled.div`
  padding: 30px;
  border-radius: 10px;
  overflow: auto;
  border-left: 2px solid ${props => props.theme.secondary};
  box-sizing: border-box;

  @media screen and (max-width: 700px) {
    margin-top: 30px;
  }

  @media screen and (min-width: 700px) {
    margin: 30px;
    width: 700px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const StyledH1 = styled.h1`
  margin: 0;
  font-size: 1.4em;
  font-weight: normal;
`;

const Description = styled.p`
  margin-top: 30px;
  margin-left: 15px;
  font-size: .95em;
  line-height: 1.5;
`;

const ProjectDetail = ({ header, content }) => (
  <DetailsContainer>
    <StyledH1> {header} </StyledH1>
    <Description> {content} </Description>
  </DetailsContainer>
);

export default ProjectDetail;
