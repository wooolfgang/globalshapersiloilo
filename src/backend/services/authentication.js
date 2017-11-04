import auth from 'feathers-authentication';
import jwt from 'feathers-authentication-jwt';
import local from 'feathers-authentication-local';
import oauth2 from 'feathers-authentication-oauth2';
import { Strategy as FBStrategy } from 'passport-facebook';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import CustomVerifier from '../../models/CustomVerifier';

function authentication() {
  return function execute() {
    const app = this;

    app.configure(auth(app.get('auth')));
    app.configure(local());
    app.configure(oauth2({
      name: 'facebook',
      Strategy: FBStrategy,
      service: 'api/users',
      clientID: '338814276566702',
      clientSecret: 'e286376f8175bcb8fc549224fc73f3cc',
      callbackURL: 'http://localhost:3000/auth/facebook/callback',
      successRedirect: 'http://localhost:3000/#/signup',
      scope: ['public_profile', 'email'],
      profileFields: ['email', 'gender', 'displayName'],
      Verifier: CustomVerifier,
    }));
    app.configure(oauth2({
      name: 'google',
      Strategy: GoogleStrategy,
      service: 'api/users',
      clientID: '206616668311-3o0ls5sopak3e02vhkmvhpjnl9gqlk5f.apps.googleusercontent.com',
      clientSecret: 'pW3jXSpRYbpp0JgdEmWuDapR',
      callbackURL: 'http://localhost:3000/auth/google/callback',
      successRedirect: 'http://localhost:3000/#/signup',
      scope: ['profile', 'email'],
      profileFields: ['email', 'gender', 'displayName'],
      Verifier: CustomVerifier,
    }));
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
