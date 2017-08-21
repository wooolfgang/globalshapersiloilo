import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import HeroContainer from './HeroContainer';
import MainContainer from './MainContainer';
import LocalListingsContainer from './LocalListingsContainer';
import Footer from './Footer';

const StyledApp = styled.div`
`;


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyledApp>
        <Header />
        <HeroContainer />
        <MainContainer />
        <LocalListingsContainer />
        <Footer />
      </StyledApp>
    );
  }
}

export default App;