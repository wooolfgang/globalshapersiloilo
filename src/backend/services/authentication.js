import auth from 'feathers-authentication';
import jwt from 'feathers-authentication-jwt';
import local from 'feathers-authentication-local';

function authentication() {
  return function execute() {
    const app = this;

    app.configure(auth(app.get('auth')));
    app.configure(local());
    app.configure(jwt());

    app.service('api/authentication').hooks({
      before: {
        create: [
          auth.hooks.authenticate(['jwt', 'local']),
        ],
        remove: [
          auth.hooks.authenticate('jwt'),
        ],
      },
    });
  };
}

export default authentication;
