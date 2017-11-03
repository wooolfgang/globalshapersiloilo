import feathersMongo from 'feathers-mongodb';
import { hooks } from 'feathers-authentication-local';
import auth from 'feathers-authentication';
import transform from '../../hooks/transform';
import validate from '../../hooks/validate';
import User from '../../models/User';

function userService(db) {
  return function execute() {
    const app = this;

    app.use('api/users', feathersMongo({ Model: db.collection('users') }));

    app.service('api/users').hooks({
      before: {
        find: [],
        get: [],
        create: [transform(User), validate(), hooks.hashPassword({ passwordField: 'password' })],
        update: [],
        patch: [],
        remove: [],
      },
      after: {
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: [],
        all: [],
      },
    });
  };
}

export default userService;
