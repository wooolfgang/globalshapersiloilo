import feathersMongo from 'feathers-mongodb';
import { hooks } from '@feathersjs/authentication-local';
import auth from '@feathersjs/authentication';
import hook from 'feathers-authentication-hooks';
import { fastJoin } from 'feathers-hooks-common';
import transform from '../../hooks/transform';
import validate from '../../hooks/validate';
import customizeProviderData from '../../hooks/customizeProviderData';
import restrictUser from '../../hooks/restrictUser';
import User from '../../models/User';

function userService(db) {
  return function execute() {
    const app = this;

    app.use('api/users', feathersMongo({ Model: db.collection('users') }));

    const userResolvers = {
      joins: {
        projectIds: () => async (user) => {
          user.projectIds = (await app.service('api/projectvolunteers').find({ query: { userId: user._id } })).map(data => data.projectId);
        },
        projects: $select => async (user) => {
          user.projects = (await app.service('api/projects').find({ query: { _id: { $in: user.projectIds }, $select }, paginate: false }));
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
          customizeProviderData(),
          ...validation,
          hooks.hashPassword({ passwordField: 'password' }),
        ],
        update: [
          customizeProviderData(),
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
        all: [
          fastJoin(userResolvers, { projectIds: true }),
          fastJoin(userResolvers, { projects: [['name', 'projectChallenge']] }),
          hooks.protect('password'),
        ],
      },
    });
  };
}

export default userService;
