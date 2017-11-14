import userService from './user';
import projectService from './project';
import organizationService from './organization';

function services() {
  return function execute() {
    const app = this;

    app.configure(userService());
    app.configure(projectService());
    app.configure(organizationService());
  };
}

export default services;
