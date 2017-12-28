import auth from '@feathersjs/authentication';
import jwt from '@feathersjs/authentication-jwt';
import local from '@feathersjs/authentication-local';
import oauth2 from '@feathersjs/authentication-oauth2';
import { Strategy as FBStrategy } from 'passport-facebook';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

function authentication() {
  return function execute() {
    const app = this;
    const config = app.get('auth');

    app.configure(auth(config));
    app.configure(local());

    app.configure(oauth2(Object.assign({
      name: 'facebook',
      Strategy: FBStrategy,
    }, config.facebook)));

    app.configure(oauth2(Object.assign({
      name: 'google',
      Strategy: GoogleStrategy,
    }, config.google)));

    app.configure(jwt());
    app.service('api/authentication').hooks({
      before: {
        create: [
          auth.hooks.authenticate(['jwt', 'local', 'facebook', 'google']),
        ],
        remove: [
          auth.hooks.authenticate('jwt'),
        ],
      },
    });
  };
}

export default authentication;
