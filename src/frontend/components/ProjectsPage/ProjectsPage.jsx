import React from 'react';
import { observer, inject } from 'mobx-react';
import { instanceOf } from 'prop-types';
import styled from 'styled-components';
import ProjectsContainer from './ProjectsContainer';
import Search from './Search';
import ProjectStore from '../../stores/ProjectStore';

const StyledDiv = styled.div`
  height: 100%;
  padding-bottom: 20px;
  background: #FAFAFA;
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
  }

  @media screen and (max-width: 1012px) {
    h3 {
      text-align: center;
      width: 100%;
      margin-bottom: 6px;
      font-size: 1.5em;
    }
  }
`;

const Header = styled.div`
  width: 85%;
  margin: auto;
  margin-top: 10px;

  h4 {
    margin: 0px;
    border-bottom: 1px solid lightgray;
    padding-bottom: 8px;
  }
`;

const ProjectsPage = ({ projectStore }) => (
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

ProjectsPage.propTypes = {
  projectStore: instanceOf(ProjectStore).isRequired,
};

export default inject('projectStore')(observer(ProjectsPage));
