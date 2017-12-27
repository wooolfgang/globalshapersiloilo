import React from 'react';
import { inject, observer } from 'mobx-react';
import { instanceOf } from 'prop-types';
import ProjectBanner from './ProjectBanner';
import ProjectDetailsContainer from './ProjectDetailsContainer';
import UserStore from '../../stores/UserStore';

class ProjectView extends React.Component {
  static propTypes = {
    userStore: instanceOf(UserStore).isRequired,
  }

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
    const { userStore: { currentUser } } = this.props;
    if (!project) return null;
    return (
      <div>
        {
          currentUser.projectIds.includes(project._id) ?
            <div style={{ textAlign: 'center' }}> 
              <h1>
              Chatroom for volunteers should proceed here 
              </h1> 
            </div> :
            <div>
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
            </div>
        }
      </div>
    );
  }
}

export default inject('projectStore', 'userStore')(observer(ProjectView));
