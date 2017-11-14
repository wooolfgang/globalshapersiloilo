import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: inline-block;
  transition: width 300ms;
  opacity: ${props => (props.showed ? 1 : 0)};
  width: ${props => (props.showed ? '100%' : 0)};
  transform: ${props => (props.showed ? 'scale(1)' : 'scale(0)')};
`;

const Step = ({ children, showed }) => (
  <StyledDiv showed={showed}>
    {children}
  </StyledDiv>
);

export default Step;
