import { observable, action } from 'mobx';

class UserStore {
  @observable currentUser;
  @observable userInput = { username: '', password: '' };

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
        username: this.userInput.username,
        password: this.userInput.password,
        strategy: 'local',
      });
      const payload = await client.passport.verifyJWT(token.accessToken);
      const user = await client.service('api/users').get(payload.userId);
      this.setUser(user);
    } catch (e) {
      console.log(e);
    }
  }

  @action.bound onSigninInput(e) {
    this.userInput[e.target.id] = e.target.value;
  }
}

export default UserStore;
