import feathersMongo from 'feathers-mongodb';
import { hooks } from 'feathers-authentication-local';
import auth from 'feathers-authentication';

function userService(db) {
  return function execute() {
    const app = this;

    app.use('api/users', feathersMongo({ Model: db.collection('users') }));

    app.service('api/users').hooks({
      before: {
        find: [auth.hooks.authenticate('jwt')],
        get: [],
        create: [hooks.hashPassword({ passwordField: 'password' })],
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
