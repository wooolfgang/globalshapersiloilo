import React from 'react';
import styled from 'styled-components';
import { fb, instagram, twitter } from '../../assets/theme/images';

const SocialMediaContainer = styled.div`
  display: flex;

  img {
    width: 40px;
    height: 40px;
    margin: 10px;
  }
`;

const Social = () => (
  <SocialMediaContainer>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.facebook.com/globalshapersiloilo/?ref=br_rs"
    >
      <img src={fb} alt="fb-social" />
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://twitter.com/iloiloshapers"
    >
      <img src={twitter} alt="twitter-social" />
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.instagram.com/globalshaperscommunity/?hl=en"
    >
      <img src={instagram} alt="instagram-social" />
    </a>
  </SocialMediaContainer>
);

export default Social;
