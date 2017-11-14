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
  handleNextStep = () => {
    const { activeIndex, handleNextStep, handleLastStep, children } = this.props;
    if (activeIndex < children.length - 1) {
      handleNextStep();
    } else if (activeIndex === children.length - 1) {
      handleLastStep();
    }
  }

  handlePrevStep = () => {
    const { activeIndex, handlePrevStep } = this.props;
    if (activeIndex > 0) {
      handlePrevStep();
    }
  }

  renderSteps = () => {
    const { children, activeIndex } = this.props;
    return React.Children.map(children, (child, index) => {
      if (index === activeIndex) {
        return React.cloneElement(child, { ...child.props, showed: true });
      }
      return child;
    });
  }

  render() {
    const { headers, width, height, activeIndex, children } = this.props;
    const lastIndex = children.length - 1;
    return (
      <StyledDiv height={height} width={width}>
        <HeaderContainer
          headers={headers}
          activeIndex={activeIndex}
          lastIndex={lastIndex}
        />
        {this.renderSteps()}
        <StepButtons
          handleNextStep={this.handleNextStep}
          handlePrevStep={this.handlePrevStep}
          activeIndex={activeIndex}
          lastIndex={lastIndex}
        />
      </StyledDiv>
    );
  }
}

export default Stepper;
