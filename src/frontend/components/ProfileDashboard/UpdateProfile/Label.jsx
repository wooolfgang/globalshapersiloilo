import React from 'react';
import styled from 'styled-components';
import { node } from 'prop-types';

const StyledLabel = styled.p`
  margin: 12px 0;
  font-size: 1em;
  align-self: center;
  width: 315px;
`;

const Label = ({ children }) => (
  <StyledLabel>
    {children}
  </StyledLabel>
);

Label.propTypes = {
  children: node.isRequired,
};

export default Label;
