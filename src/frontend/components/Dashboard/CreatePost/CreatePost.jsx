import React from 'react';
import styled from 'styled-components';
import TextArea from './TextArea';
import SubmitBar from './SubmitBar';

const StyledDiv = styled.div`
  width: 100%;
  height: 100px;
  margin: 20px 0px; 
  background-color: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: ${props => props.theme.cardOne};
`;

const CreatePost = () => (
  <StyledDiv>
    <TextArea />
    <SubmitBar />
  </StyledDiv>
);

export default CreatePost;
