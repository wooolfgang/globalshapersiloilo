import React from 'react';
import styled from 'styled-components';
import { inject } from 'mobx-react';

const StyledDiv = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 2px;
  }

  p {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const NoResults = ({ projectStore }) => (
  <StyledDiv>
    <h1> No results found </h1>
    <p onClick={projectStore.resetSearchFields}> View all projects </p>
  </StyledDiv>
);

export default inject('projectStore')(NoResults);
