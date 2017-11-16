import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { limitWordCount } from '../../../../utils';

const StyledDiv = styled.div`
  position: relative;
  width: 400px;
  height: 200px;
  color: gray;
  cursor: pointer;   
  overflow: hidden;
`;

const ProjectImg = styled.img`
  transition: 0.3s;
  max-width: 400px;
  max-height: 200px;
  transform: ${props => props.hovered && 'scale(1.2)'};
`;

const ProposalContainer = styled.div`
  z-index: 999;
  position: absolute;
  background: rgba(0,0,0,0.7);
  padding: 20px;
  height: 160px;
  color: lightgray;
  font-family: ${props => props.theme.fontTwo};
  display: ${props => (props.show ? 'block' : 'none')};
`;

class Preview extends React.Component {
  state = { isHovered: false };

  onMouseLeave = () => {
    this.setState({ isHovered: false });
  }

  onMouseEnter = () => {
    this.setState({ isHovered: true });
  }

  render() {
    const { taskDescription, imgUrl } = this.props;
    return (
      <StyledDiv onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        <ProposalContainer show={this.state.isHovered}>
          <span> {limitWordCount(20, taskDescription)}... <Link to="">See more</Link></span>
        </ProposalContainer>
        <ProjectImg src={imgUrl} alt="project" hovered={this.state.isHovered} />
      </StyledDiv>
    );
  }
}

export default Preview;
