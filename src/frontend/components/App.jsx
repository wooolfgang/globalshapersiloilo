import React from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import Header from './Header';
import HeroContainer from './HeroContainer';
import MainContainer from './MainContainer';
import SubContainer from './SubContainer';
<<<<<<< HEAD
=======
import SignupContainer from './SignupContainer';
>>>>>>> c06596ead2ac4307b8e1cccdeb3d6637982a99b8
import Footer from './Footer';

const StyledApp = styled.div`
`;

@observer @inject('rootStore')
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { rootStore } = this.props;
    return (
      <StyledApp>
        <Header />
        <HeroContainer />
        <MainContainer />
        <SubContainer />
        <Footer />
        <SignupContainer/>
      </StyledApp>
    );
  }
}

export default App;