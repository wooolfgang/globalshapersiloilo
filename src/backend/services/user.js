import feathersMongo from 'feathers-mongodb';
import { hooks } from 'feathers-authentication-local';
import auth from 'feathers-authentication';
import hook from 'feathers-authentication-hooks';
import { populate } from 'feathers-hooks-common';
import transform from '../../hooks/transform';
import validate from '../../hooks/validate';
import customizeProviderData from '../../hooks/customizeProviderData';
import restrictUser from '../../hooks/restrictUser';
import User from '../../models/User';

function userService(db) {
  return function execute() {
    const app = this;

    app.use('api/users', feathersMongo({ Model: db.collection('users') }));

    const userSchema = {
      include: {
        service: 'api/projects',
        nameAs: 'projects',
        parentField: 'projectIds',
        childField: '_id',
        query: {
          $select: ['name', 'projectChallenge'],
        },
      },
    };

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
          customizeProviderData(), ...validation, hooks.hashPassword({ passwordField: 'password' }),
        ],
        update: [
          customizeProviderData(), ...validation, ...security,
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
        all: [populate({ schema: userSchema })],
      },
    });
  };
}

export default userService;
