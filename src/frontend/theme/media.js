import { css } from 'styled-components';

const sizes = {
  phone: 412,
  tablet: 768,
  desktop: 992,
  giant: 1170,
};

const media = {};

Object.keys(sizes).forEach((key) => {
  media[key] = function (...args) {
    return css`
      @media(max-width: ${sizes[key]}px) {
        ${css(...args)}
      }`;
  };
});

export default media;
