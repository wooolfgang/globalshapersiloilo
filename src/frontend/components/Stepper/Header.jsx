import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Head = styled.span` 
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.grayOne};  
  font-family: ${props => props.theme.fontTwo};
`;

const Number = styled.div`
  font-size: 12px;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  transition: background .3s;
  color: white;
  margin-right: 8px;
  background: ${props => props.colored ? props.theme.accent : 'gray'};
`;

const Text = styled.span`
  transition: color .3s;
  margin-right: 8px;
  color: ${props => props.active ? 'black' : 'gray'};
`;

class Header extends React.Component {
  renderHead = () => {
    const { activeIndex, index, children } = this.props;
    if (activeIndex === index) {
      return <Head><Number colored> {index}</Number><Text active>{children}</Text></Head>
    } else if (index < activeIndex) {
      return <Head><Number colored>  &#10003;</Number><Text>{children}</Text></Head>
    } else {
      return <Head><Number> {index} </Number><Text>{children}</Text></Head>
    }
  }

  render() {
    const { children, activeIndex, index } = this.props;
    return (
      <StyledHeader>
        {
          this.renderHead()
        }
      </StyledHeader>
    );
  }
}


export default Header;
