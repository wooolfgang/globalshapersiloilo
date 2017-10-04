import { observable, action, runInAction } from 'mobx';

class UserStore {
  @observable currentUser;
  @observable signinInput = { username: '', password: '' };
  @observable signupInput = {};
  @observable signupSuccess;

  constructor(store, client) {
    this.store = store;
    this.client = client;
  }

  @action.bound setUser(user) {
    this.currentUser = user;
  }

  @action.bound async authenticate() {
    try {
      const token = await client.authenticate();
      const payload = await client.passport.verifyJWT(token.accessToken);
      const user = await client.service('api/users').get(payload.userId);
      this.setUser(user);
    } catch (e) {
      console.log(e);
    }
  }

  @action.bound async login() {
    try {
      const token = await client.authenticate({
        username: this.signinInput.username,
        password: this.signinInput.password,
        strategy: 'local',
      });
      const payload = await client.passport.verifyJWT(token.accessToken);
      const user = await client.service('api/users').get(payload.userId);
      this.setUser(user);
    } catch (e) {
      console.log(e);
    }
  }

  @action.bound async signup() {
    try {
      const user = await this.client.service('api/users').create(this.signupInput);
      runInAction(() => {
        if (user) {
          this.signupInput = undefined;
          this.signupSuccess = true;
        }
      })
    } catch (e) {
      console.log(e);
    }
  }

  @action.bound onSigninInput(e) {
    this.signinInput[e.target.id] = e.target.value;
  }

  @action.bound onSignupInput(e) {
    this.signupInput[e.target.id] = e.target.value;
  }
}

export default UserStore;
