import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import HeroContainer from './HeroContainer';
import MainContainer from './MainContainer';
import SubContainer from './SubContainer';
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
        <SubContainer />
        <Footer />
      </StyledApp>
    );
  }
}

export default App;