import { action, observable } from 'mobx';

class UIStore {
  @observable signupModalViewed;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action.bound onSignupModalView() {
    this.signupModalViewed = !this.signupModalViewed;
  }
}

export default UIStore;