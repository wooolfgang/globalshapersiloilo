import transform from '../../hooks/transform';
import validate from '../../hooks/validate';
import User from '../../models/User';

function userService() {
  return function execute() {
    const app = this;

    app.service('api/users').hooks({
      before: {
        find: [],
        get: [],
        create: [transform(User), validate()],
        patch: [],
        remove: [],
        all: [],
      },
      after: {
        find: [],
        get: [],
        create: [],
        patch: [],
        remove: [],
        all: [],
      },
    });
  };
}

export default userService;
