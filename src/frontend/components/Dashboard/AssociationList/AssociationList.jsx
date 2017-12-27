import React from 'react';
import styled from 'styled-components';
import { instanceOf } from 'prop-types';
import { inject } from 'mobx-react';
import ProjectList from './ProjectList';
import UserStore from '../../../stores/UserStore';

const StyledDiv = styled.div`
  width: 300px; 
  max-height: 200px;
  margin: 20px 40px;
  border: 1px solid rgba(0,0,0,.05);
  background-color: #fff;
  overflow: auto;
`;

const AssociationList = ({ userStore: { currentUser } }) => {
  const projects = currentUser.projects ? currentUser.projects : [];
  return (
    <StyledDiv>
      <ProjectList projects={(projects instanceof Array) ? projects : [currentUser.projects]} />
    </StyledDiv>
  );
};

AssociationList.propTypes = {
  userStore: instanceOf(UserStore).isRequired,
};

export default inject('userStore')(AssociationList);
