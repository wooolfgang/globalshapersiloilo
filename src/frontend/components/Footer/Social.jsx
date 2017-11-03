import React from 'react';
import styled from 'styled-components';
import fb from '../../assets/images/facebook.png';
import instagram from '../../assets/images/instagram.png';
import twitter from '../../assets/images/twitter.png';

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
    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/globalshapersiloilo/?ref=br_rs" ><img src={fb} /></a>
    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/iloiloshapers"><img src={twitter} /></a>
    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/globalshaperscommunity/?hl=en"><img src={instagram} /></a>
  </SocialMediaContainer>
);

export default Social;
