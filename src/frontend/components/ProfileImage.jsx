import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

const StyledDiv = styled.div`
  border-radius: 50%;
  width: ${props => props.width};
  height: ${props => props.height};
  background: url(${props => props.imgUrl});
  background-color: gray;
  background-size: cover;
`;

const ProfileImage = ({ width, height, imgUrl }) => (
  <StyledDiv width={width} height={height} imgUrl={imgUrl} />
);

ProfileImage.propTypes = {
  width: string,
  height: string,
  imgUrl: string,
};

ProfileImage.defaultProps = {
  width: '100px',
  height: '100px',
  imgUrl: undefined,
};

export default ProfileImage;
