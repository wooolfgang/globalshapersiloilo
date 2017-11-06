import { Verifier } from 'feathers-authentication-oauth2';

class CustomVerifier extends Verifier {
  constructor(app, options = {}) {
    super(app, options);
  }

  async verify(req, accessToken, refreshToken, profile, done) {
    const data = { profile, accessToken, refreshToken };
    const userService = await this.app.service('api/users');
    const email = profile._json.email ? profile._json.email : profile._json.emails[0].value;
    const result = await userService.find({ query: { email } });
    const normalizeResult = await this._normalizeResult(result);
    const hasSameEmail = result.length !== 0;
    const newData = hasSameEmail ? await this._updateEntity(normalizeResult, data) : await this._createEntity(data);
    done(null, newData);
  }
}

export default CustomVerifier;
