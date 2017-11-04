import feathersMongo from 'feathers-mongodb';
import local, { hooks } from 'feathers-authentication-local';
import auth from 'feathers-authentication';
import hook from 'feathers-authentication-hooks';
import transform from '../../hooks/transform';
import validate from '../../hooks/validate';
import restrictUser from '../../hooks/restrictUser';
import User from '../../models/User';

function userService(db) {
  return function execute() {
    const app = this;

    app.use('api/users', feathersMongo({ Model: db.collection('users') }));

    app.service('api/users').hooks({
      before: {
        find: [],
        get: [],
        create: [
          transform(User),
          validate(),
          hooks.hashPassword({ passwordField: 'password' }),
        ],
        update: [
          auth.hooks.authenticate('jwt'),
          hook.restrictToAuthenticated(),
          restrictUser(),
        ],
        patch: [
          auth.hooks.authenticate('jwt'),
          hook.restrictToAuthenticated(),
          restrictUser(),
        ],
        remove: [
          auth.hooks.authenticate('jwt'),
          hook.restrictToAuthenticated(),
          restrictUser(),
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
