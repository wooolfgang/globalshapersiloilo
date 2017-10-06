import { observable, action, runInAction } from 'mobx';

const initialErrorState = {
  username: '', password: '', email: '',
  fullName: '', birthDay: '', addres: '',
  phoneNumber: '', occupation: '', affiliation: ''
}

class UserStore {
  @observable currentUser;
  @observable authenticated;
  @observable signinInput = {};
  @observable signupInput = {};
  @observable signupSuccess;
  @observable signupErrorMsg = initialErrorState;
  @observable signinErrorMsg;

  constructor(store, client) {
    this.store = store;
    this.client = client;
  }

  @action.bound async authenticate() {
    try {
      const token = await this.client.authenticate();
      const payload = await this.client.passport.verifyJWT(token.accessToken);
      const user = await this.client.service('api/users').get(payload.userId);
      runInAction(() => {
        this.currentUser = user;
        this.authenticated = true;
      })
    } catch (e) {
      console.log(e);
    }
  }

  @action.bound async login() {
    try {
      console.log(this.signinInput)
      const token = await this.client.authenticate({
        username: this.signinInput.username,
        password: this.signinInput.password,
        strategy: 'local',
      });
      const payload = await this.client.passport.verifyJWT(token.accessToken);
      const user = await this.client.service('api/users').get(payload.userId);
      runInAction(() => {
        this.currentUser = user;
        this.authenticated = true;
      })
    } catch (e) {
      runInAction(() => {
        this.signinErrorMsg = 'Invalid login or password'
      })
    }
  }

  @action.bound async signup() {
    try {
      this.signupErrorMsg = initialErrorState;
      const user = await this.client.service('api/users').create(this.signupInput);
      runInAction(() => {
        if (user) {
          this.signupSuccess = true;
          this.signupInput = undefined;
        }
      })
    } catch (e) {
      runInAction(() => {
        const key = e.details[0].context.key;
        const message = e.details[0].message;
        this.signupErrorMsg[key] = message;
      })
    }
  }

  @action.bound async logout() {
    try {
      await this.client.logout();
      runInAction(() => {
        this.authenticated = false;
      })
    } catch (e) {
      console.log(e);
    }
  }

  @action.bound onSigninInput(e) {
    this.signinErrorMsg = '';
    this.signinInput[e.target.id] = e.target.value;
  }

  @action.bound onSignupInput(e) {
    this.signupErrorMsg = ''
    this.signupInput[e.target.id] = e.target.value;
  }
}

export default UserStore;
