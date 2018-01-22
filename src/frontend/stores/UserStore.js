import { observable, action, runInAction, computed } from 'mobx';
import * as errorState from '../../schema/errorStates';
import Api from '../../models/Api';

class UserStore {
  @observable currentUser;
  @observable users = [];
  @observable isAuthenticating = false;

  constructor(store, client) {
    this.store = store;
    this.client = client;
    this.setIsLoading = store.viewStore.setIsLoading;
    this.api = new Api('api/users', client);
    this.client.service('api/projectvolunteers').on('created', (res) => {
      this.currentUser.addProjectId(res.projectId);
    });
  }

  @action.bound setCurrentUser(user) {
    this.currentUser = user;
  }

  @action.bound async authenticate() {
    try {
      runInAction(() => { this.isAuthenticating = true; this.setIsLoading(true); });
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
      this.setIsLoading(true);
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
        this.store.viewStore.closeSigninModal();
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
      const user = await this.api.create(this.store.formsStore.signupInput);
      runInAction(() => {
        this.store.formsStore.signinInput.username = user.username;
        this.store.formsStore.signinInput.password = this.store.formsStore.signupInput.password;
        this.store.formsStore.signupSuccess = true;
        this.store.formsStore.signupInput = undefined;
        this.setIsLoading(false);
      });
      await this.login();
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
      this.store.formsStore.signinInput = {};
    } catch (e) {
      this.setIsLoading(false);
      console.log(e);
    }
  }

  @action.bound async fetchUsers() {
    try {
      const users = await this.api.find();
      runInAction(() => { this.users = users; });
    } catch (e) {
      console.log(e);
    }
  }

  @action.bound async fetchUser(userId) {
    try {
      return this.api.get(userId);
    } catch (e) {
      console.log(e);
    }
    return null;
  }

  @action.bound async patchUserData(newData) {
    return this.api.patch(this.currentUser._id, newData);
  }


  @action.bound patchCurrentUser(newData) {
    this.currentUser = Object.assign(this.currentUser, newData);
  }

  @computed get authenticated() {
    return this.currentUser !== undefined && !this.isAuthenticating;
  }
}

export default UserStore;
