import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import colors from '../theme/constants';

const StyledP = styled.p`
  color: ${colors.error};
  font-size: 12px;
  display: inline-block;
  margin: 0px !important;
  padding: 0px !important;
  width: 200px;
`;

const ErrorMsg = ({ message }) => (
  <div>
    {
      message ?
        <StyledP > {message} </StyledP>
        : undefined
    }
  </div>
);

export default observer(ErrorMsg);
