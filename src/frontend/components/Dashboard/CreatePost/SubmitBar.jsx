import React from 'react';
import styled from 'styled-components';
import PostButton from './PostButton';

const StyledDiv = styled.div`
  box-sizing: border-box;
  height: 50px;
  width: 100%;
  margin: 0;
  position: relative;
  background: ${props => props.theme.grayOne};
`;

const SubmitBar = () => (
  <StyledDiv>
    <PostButton value={'Post'} />
  </StyledDiv >

);

export default SubmitBar;

