import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link) `
  display: inline-block !important;
  width: 135px;
  margin-top: 15px;
  font-size: .90em;
  text-decoration: none;
  font-family: ${props => props.theme.fontTwo};
  color: ${props => props.theme.secondary};

  :hover {
    text-decoration: underline
  }
`;

const LinkComponent = props => (
  <StyledLink {...props} />
);

export default LinkComponent;
