import feathersMongo from 'feathers-mongodb';
import { hooks } from 'feathers-authentication-local';
import auth from 'feathers-authentication';
import hook from 'feathers-authentication-hooks';
import transform from '../../hooks/transform';
import validate from '../../hooks/validate';
import customizeProviderData from '../../hooks/customizeProviderData';
import restrictUser from '../../hooks/restrictUser';
import User from '../../models/User';

function userService(db) {
  return function execute() {
    const app = this;

    app.use('api/users', feathersMongo({ Model: db.collection('users') }));

    const security = [
      auth.hooks.authenticate('jwt'),
      hook.restrictToAuthenticated(),
      restrictUser(),
    ];

    const validation = [
      transform(User),
      validate(),
    ];

    app.service('api/users').hooks({
      before: {
        find: [],
        get: [],
        create: [
          customizeProviderData(),
          ...validation,
          hooks.hashPassword({ passwordField: 'password' }),
        ],
        update: [
          customizeProviderData(),
          transform(User),
          validate(),
          ...validation,
          ...security,
        ],
        patch: [
          ...security,
        ],
        remove: [
          ...security,
        ],
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
