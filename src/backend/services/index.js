import userService from './user';
import authentication from './authentication';

function services(db) {
  return function execute() {
    const app = this;
    app
      .configure(userService(db))
      .configure(authentication());
  };
}

export default services;
