import React from 'react';
import { inject, observer } from 'mobx-react';
import Projects from './Projects';
import NoResults from './NoResults';

class ProjectsContainer extends React.Component {
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
          <Projects projects={projects} />
        }
      </div>
    );
  }
}

export default inject('projectStore')(observer(ProjectsContainer));
