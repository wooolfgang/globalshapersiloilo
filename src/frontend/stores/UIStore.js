import { action, observable } from 'mobx';

class UIStore {
  @observable signupModalViewed;

  constructor(store) {
    this.store = store;
  }

  @action.bound onSignupModalView() {
    this.signupModalViewed = !this.signupModalViewed;
  }
}

export default UIStore;