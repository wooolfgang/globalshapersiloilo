import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';
import Link from './Link';

const StyledLink = styled(Link) `
  color: ${props => props.theme.tertiary};
  margin: ${props => props.margin};
`;

const ChatLink = ({ projectId, margin }) => (
  <StyledLink to={`/chat/${projectId}`} margin={margin}> Go to chat &#8594;</StyledLink>
);

ChatLink.propTypes = {
  projectId: string.isRequired,
  margin: string,
};

ChatLink.defaultProps = {
  margin: '0px',
};

export default ChatLink;
