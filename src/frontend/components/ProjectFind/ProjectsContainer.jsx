import React from 'react';
import { inject, observer } from 'mobx-react';
import Projects from './Projects';
import NoResults from './NoResults';

class ProjectsContainer extends React.Component {
  async componentDidMount() {
    const { store: { projectStore } } = this.props;
    await projectStore.fetchProjects();
  }

  render() {
    const { store: { projectStore } } = this.props;
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
          projects &&
          <Projects projects={projects} />
        }
      </div>
    );
  }
}

export default inject('store')(observer(ProjectsContainer));
