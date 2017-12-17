import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

const StyledDiv = styled.div`
  width: 125px;
  height: 125px;
  background: url(${props => props.imgUrl});
  background-size: cover;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -110%);
`;

const AccountImage = ({ imgUrl }) => (
  <StyledDiv imgUrl={imgUrl} />
);

AccountImage.propTypes = {
  imgUrl: string.isRequired,
};

export default AccountImage;
