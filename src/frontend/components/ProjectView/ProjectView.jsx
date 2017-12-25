import React from 'react';
import { inject, observer } from 'mobx-react';
import ProjectBanner from './ProjectBanner';
import ProjectDetailsContainer from './ProjectDetailsContainer';

class ProjectView extends React.Component {
  state = {
    project: undefined,
  };

  async componentDidMount() {
    const { projectStore, match } = this.props;
    const project = await projectStore.fetchProject(match.params.id);
    (() => this.setState({ project }))();
  }

  render() {
    const { project } = this.state;
    if (!project) return null;
    return (
      <div>
        <ProjectBanner
          organizationName={project.organization.name}
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
      </div>
    );
  }
}

export default inject('projectStore')(observer(ProjectView));
