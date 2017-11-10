import React from 'react';
import styled from 'styled-components';
import HeaderContainer from './HeaderContainer';
import StepButtons from './StepButtons';

const StyledDiv = styled.div`
  background: white;
  position: relative;
  padding: 15px;
  overflow: hidden;
  box-shadow: ${props => props.theme.cardTwo};
  width: ${props => (props.width ? props.width : '500px')};
  height: ${props => (props.height ? props.height : '500px')};
`;

class Stepper extends React.Component {
  state = {
    activeIndex: 0,
  }

  handleNextStep = () => {
    if (this.state.activeIndex < this.props.children.length - 1) {
      this.setState({ activeIndex: this.state.activeIndex + 1 });
    }
  }

  handlePreviousStep = () => {
    if (this.state.activeIndex > 0) {
      this.setState({ activeIndex: this.state.activeIndex - 1 });
    }
  }

  renderSteps = () => {
    const children = this.props.children;
    return React.Children.map(children, (child, index) => {
      if (index === this.state.activeIndex) {
        return React.cloneElement(child, { ...child.props, showed: true });
      }
      return child;
    });
  }

  render() {
    const { headers, width, height } = this.props;
    const lastIndex = this.props.children.length;
    return (
      <StyledDiv height={height} width={width}>
        <HeaderContainer
          headers={headers}
          activeIndex={this.state.activeIndex}
          lastIndex={lastIndex}
        />
        {this.renderSteps()}
        <StepButtons
          handleNextStep={this.handleNextStep}
          handlePreviousStep={this.handlePreviousStep}
          activeIndex={this.state.activeIndex}
          lastIndex={lastIndex}
        />
      </StyledDiv>
    );
  }
}

export default Stepper;
