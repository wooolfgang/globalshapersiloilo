import React from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import ProjectsContainer from './ProjectsContainer';
import Search from './Search';

const StyledDiv = styled.div`
  height: 700px;
  min-height: calc(100vh - 250px);
  background: ${props => props.theme.grayOne};
`;

const Container = styled.div`
  width: 85%;
  margin: auto;
  padding: 30px 0px 15px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  h3 {
    margin: 0px;
    color: #333;
    padding-bottom: 8px;
    width: 430px;
  }
`;

const Header = styled.div`
  width: 85%;
  margin: auto;

  h4 {
    margin: 0px;
    border-bottom: 1px solid lightgray;
    padding-bottom: 8px;
  }
`;

const ProjectFind = ({ store: { projectStore } }) => (
  <StyledDiv>
    <Container>
      <h3> Find projects and make an impact </h3>
      <Search />
    </Container>
    <Header>
      <h4> {projectStore.hasSearched ? 'Search results' : 'Projects in Iloilo'} </h4>
    </Header>
    <ProjectsContainer />
  </StyledDiv>
);

export default inject('store')(observer(ProjectFind));
