import userService from './user';
import authentication from './authentication';
import projectService from './project';
import organizationService from './organization';

function services(db) {
  return function execute() {
    const app = this;

    app.configure(authentication());
    app.configure(userService(db));
    app.configure(projectService(db));
    app.configure(organizationService(db));
  };
}

export default services;
