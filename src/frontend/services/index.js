import userService from './user';

function services() {
  return function execute() {
    const app = this;

    app.configure(userService());
  };
}

export default services;
