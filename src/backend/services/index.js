import userService from './users';

function services(db) {
  return function execute() {
    const app = this;
    app
      .configure(userService(db))
  };
}

export default services;
