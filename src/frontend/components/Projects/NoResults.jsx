import React from 'react';
import styled from 'styled-components';
import { instanceOf } from 'prop-types';
import { inject } from 'mobx-react';
import ProjectStore from '../../stores/ProjectStore';

const StyledDiv = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  border: none;
  background: none;
  curor: pointer;
  font-size: 1.1em;
  text-decoration: underline;
  cursor: pointer;
  font-family: ${props => props.theme.fontTwo};
  color: ${props => props.theme.secondary};
`;

const NoResults = ({ projectStore }) => (
  <StyledDiv>
    <h1> No results found </h1>
    <Button onClick={projectStore.resetSearchFields}> View all projects </Button>
  </StyledDiv>
);

NoResults.propTypes = {
  projectStore: instanceOf(ProjectStore).isRequired,
};

export default inject('projectStore')(NoResults);
