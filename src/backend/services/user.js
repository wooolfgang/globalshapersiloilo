import feathersMongo from 'feathers-mongodb';
import { hooks } from 'feathers-authentication-local';
import auth from 'feathers-authentication';
import transform from '../../hooks/transform';
import validate from '../../hooks/validate';
import customizeProviderData from '../../hooks/customizeProviderData';
import User from '../../models/User';

function userService(db) {
  return function execute() {
    const app = this;

    app.use('api/users', feathersMongo({ Model: db.collection('users') }));

    app.service('api/users').hooks({
      before: {
        find: [
          auth.hooks.authenticate('jwt')
        ],
        get: [],
        create: [
          customizeProviderData(),
          transform(User), 
          validate(), 
          hooks.hashPassword({ passwordField: 'password' }),
        ],
        update: [
          customizeProviderData(),
        ],
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
