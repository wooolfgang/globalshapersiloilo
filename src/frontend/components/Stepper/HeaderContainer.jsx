import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const StyledDiv = styled.div`
  height: 50px;
  display: flex;
  width: 100%;
`;

const StepHeader = ({ headers, activeIndex, lastIndex }) => (
  <StyledDiv>
    {
      headers.map((header, index) =>
        (<Header
          key={header}
          activeIndex={activeIndex}
          index={index}
        >
          {header}
        </Header>),
      )
    }
  </StyledDiv>
);

export default StepHeader;
