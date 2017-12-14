import React from 'react';
import { inject, observer } from 'mobx-react';
import { instanceOf } from 'prop-types';
import ProjectList from './ProjectList';
import NoResults from './NoResults';
import ProjectStore from '../../stores/ProjectStore';

class ProjectsContainer extends React.Component {
  static propTypes = {
    projectStore: instanceOf(ProjectStore).isRequired,
  }

  async componentDidMount() {
    const { projectStore } = this.props;
    await projectStore.fetchProjects();
  }

  render() {
    const { projectStore } = this.props;
    let projects = projectStore.projects;

    if (projectStore.hasSearched) {
      projects = projectStore.searchResults;
    }

    if (projects.length === 0 && projectStore.hasSearched) {
      return <NoResults />;
    }

    return (
      <div>
        {
          !projectStore.isLoading &&
          <ProjectList projects={projects} />
        }
      </div>
    );
  }
}

export default inject('projectStore')(observer(ProjectsContainer));
