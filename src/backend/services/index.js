import userService from './user';
import authentication from './authentication';
import projectService from './project';

function services(db) {
  return function execute() {
    const app = this;

    app.configure(authentication());
    app.configure(userService(db));
    app.configure(projectService(db));
  };
}

export default services;
