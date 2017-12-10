import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';
import { observer } from 'mobx-react';

const StyledP = styled.p`
  font-size: 12px;
  display: inline-block;
  margin: 0px !important;
  padding: 0px !important;
  width: 200px;
  color: ${props => props.theme.error};
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

ErrorMsg.propTypes = {
  message: string,
};

ErrorMsg.defaultProps = {
  message: '',
};

export default observer(ErrorMsg);
