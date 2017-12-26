import React from 'react';
import styled from 'styled-components';
import { node, bool, func, string } from 'prop-types';

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
  z-index: 9999999;
`;

const ModalInner = styled.div`
  margin: auto;
  background: white;
  border-radius: 3px;
  padding: 5px;
  transition: all 200ms;
  width: ${props => (props.width && props.width)};
  height: ${props => (props.height && props.height)};
  opacity: ${props => (props.showed ? 1 : 0)};
  transform: ${props => (props.showed ? 'scale(1)' : 'scale(0)')};
  box-shadow: ${props => props.theme.cardOne};
  z-index: 9999999;
  position: relative;
`;

class Modal extends React.Component {
  static propTypes = {
    children: node,
    showed: bool.isRequired,
    closeModal: func,
    width: string,
    height: string,
  };

  static defaultProps = {
    closeModal: undefined,
    children: undefined,
    width: '300px',
    height: '100px',
  }

  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick, false);
  }

  handleOutsideClick = (e) => {
    if (!this.innerModal.contains(e.target) && this.outerModal.contains(e.target)) {
      this.props.closeModal();
    }
  }

  render() {
    const { children, showed, width, height } = this.props;
    return (
      <ModalOuter
        showed={showed}
        innerRef={(modalNode) => { this.outerModal = modalNode; }}
      >
        <ModalInner
          showed={showed}
          innerRef={(modalNode) => { this.innerModal = modalNode; }}
          width={width}
          height={height}
        >
          {children}
        </ModalInner>
      </ModalOuter>
    );
  }
}

export default Modal;
