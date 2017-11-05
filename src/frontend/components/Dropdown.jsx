import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  position: absolute;
  margin-top: 15px;
  z-index: 9999;
  background: white;
  display: flex;
  flex-direction: column;
  right: 0;
  box-shadow: ${props => props.theme.cardOne};  
  width: ${props => (props.width ? props.width : '150px')};
  height: ${props => (props.height ? props.height : '150px')};  
`;

class Dropdown extends React.Component {
  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick, false);
  }

  handleOutsideClick = (e) => {
    if (this.node && !this.node.contains(e.target)) {
      this.props.setView(false);
    }
  }

  render() {
    const { height, width, children, viewed } = this.props;

    if (!viewed) {
      return null;
    }

    return (
      <div ref={node => this.node = node}>
        <StyledDiv width={width} height={height} >
          {children}
        </StyledDiv >
      </div>

    );
  }
}

export default Dropdown;
