import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: inline-block;
  opacity: ${props => (props.showed ? 1 : 0)};
  width: ${props => (props.showed ? '100%' : 0)};
  transition: all 300ms ease-in-out;
`;

const Step = ({ children, showed }) => (
  <StyledDiv showed={showed}>
    {children}
  </StyledDiv>
);

export default Step;
