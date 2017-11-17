import React from 'react';
import styled from 'styled-components';

const ModalOuter = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4); 
  transform: ${props => (props.showed ? 'scale(1)' : 'scale(0)')};
`;

const ModalInner = styled.div`
  margin: auto;
  background: white;
  border-radius: 5px;
  padding: 5px;
  transition: all 200ms;
  width: ${props => (props.width ? props.width : '300px')};
  height: ${props => (props.height ? props.height : '100px')};
  opacity: ${props => (props.showed ? 1 : 0)};
  transform: ${props => (props.showed ? 'scale(1)' : 'scale(0)')};
  box-shadow: ${props => props.theme.cardOne};
`;

class Modal extends React.Component {
  render() {
    const { children, showed } = this.props;
    return (
      <ModalOuter showed={showed}>
        <ModalInner showed={showed}> {children} </ModalInner>
      </ModalOuter>
    );
  }
}

export default Modal;
