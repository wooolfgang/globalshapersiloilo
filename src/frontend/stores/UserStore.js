import { observable, action, runInAction, computed } from 'mobx';
import * as errorState from '../../schema/errorStates';

class UserStore {
  @observable currentUser;
  @observable users = [];
  @observable isAuthenticating = false;

  constructor(store, client) {
    this.store = store;
    this.client = client;
    this.setIsLoading = store.viewStore.setIsLoading;
  }

  @action.bound setCurrentUser(user) {
    this.currentUser = user;
  }

  @action.bound async authenticate() {
    try {
      runInAction(() => { this.isAuthenticating = true; this.setIsLoading(true) });
      const token = await this.client.authenticate();
      const payload = await this.client.passport.verifyJWT(token.accessToken);
      const user = await this.client.service('api/users').get(payload.userId);
      runInAction(() => {
        this.setCurrentUser(user);
        this.isAuthenticating = false;
        this.setIsLoading(false);
      });
    } catch (e) {
      runInAction(() => { this.isAuthenticating = false; this.setIsLoading(false); });
    }
  }

  @action.bound async login() {
    try {
      this.setIsLoading(true)
      const token = await this.client.authenticate({
        username: this.store.formsStore.signinInput.username,
        password: this.store.formsStore.signinInput.password,
        strategy: 'local',
      });
      const payload = await this.client.passport.verifyJWT(token.accessToken);
      const user = await this.client.service('api/users').get(payload.userId);
      runInAction(() => {
        this.setCurrentUser(user);
        this.setIsLoading(false);
      });
    } catch (e) {
      runInAction(() => {
        this.store.formsStore.signinErrorMsg = 'Invalid login or password';
        this.setIsLoading(false);
      });
    }
  }

  @action.bound async signup() {
    try {
      runInAction(() => {
        this.store.formsStore.signupErrorMsg = errorState.userFormErrorState;
        this.setIsLoading(true);
      });
      const user = await this.client.service('api/users').create(this.store.formsStore.signupInput);
      runInAction(() => {
        this.store.formsStore.signupSuccess = true;
        this.store.formsStore.signupInput = undefined;
        this.setIsLoading(false);
      });
    } catch (e) {
      runInAction(() => {
        console.log(e);
        const key = e.details[0].context.key;
        const message = e.details[0].message;
        this.store.formsStore.signupErrorMsg[key] = message;
        this.setIsLoading(false);
      });
    }
  }

  @action.bound async logout() {
    try {
      this.store.viewStore.setUserDropdownView(false);
      this.setIsLoading(true);
      await this.client.logout();
      this.setCurrentUser(undefined);
      this.setIsLoading(false);
    } catch (e) {
      this.setIsLoading(false);
      console.log(e);
    }
  }

  @action.bound async fetchUsers() {
    try {
      const users = await this.client.service('api/users').find();
      runInAction(() => { this.users = users; });
    } catch (e) {
      console.log(e);
    }
  }

  @computed get authenticated() {
    return this.currentUser !== undefined && !this.isAuthenticating;
  }
}

export default UserStore;
