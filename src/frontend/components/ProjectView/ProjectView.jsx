import React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import ProjectBanner from './ProjectBanner';
import ProjectDetailsContainer from './ProjectDetailsContainer';

const StyledDiv = styled.div`
  height: 100%;
`;

class ProjectView extends React.Component {
  state = {
    project: undefined,
  }

  async componentDidMount() {
    const { projectStore, match } = this.props;
    const project = await projectStore.fetchProject(match.params.id);
    (() => this.setState({ project }))();
  }

  render() {
    const { project } = this.state;
    if (!project) return null;
    return (
      <StyledDiv>
        <ProjectBanner
          organizationName={project.organization.name}
          projectId={project._id}
          projectName={project.name}
          createdAt={project.createdAt}
        />
        <ProjectDetailsContainer
          projectChallenge={project.projectChallenge}
          taskDescription={project.taskDescription}
          volunteerReason={project.volunteerReason}
          volunteersNeeded={project.volunteersNeeded}
          remainingSlots={project.getRemainingSlots}
        />
      </StyledDiv>
    );
  }
}

export default inject('projectStore')(observer(ProjectView));
