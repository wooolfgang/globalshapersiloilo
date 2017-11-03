import React from 'react';
import { inject, observer } from 'mobx-react';
import Projects from './Projects';

class ProjectsContainer extends React.Component {
  async componentDidMount() {
    const { store: { projectStore } } = this.props;
    await projectStore.fetchProjects();
  }

  render() {
    const { store: { projectStore: { projects, isFetching } } } = this.props;
    console.log(projects);
    return (
      <div>
        {
          (projects.length && !isFetching) !== 0 &&
          <Projects projects={projects} />
        }
      </div>
    );
  }
}

export default inject('store')(observer(ProjectsContainer));
