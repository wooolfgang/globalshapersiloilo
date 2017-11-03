import userService from './user';
import projectService from './project';

function services() {
  return function execute() {
    const app = this;

    app.configure(userService());
    app.configure(projectService());
  };
}

export default services;
