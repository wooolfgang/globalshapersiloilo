import { action, observable, runInAction } from 'mobx';

class ViewStore {
  @observable isLoading = false;
  @observable userDropdownViewed = false;
  @observable orgActiveStepIndex = 0;

  constructor(store) {
    this.store = store;
  }

  @action.bound setIsLoading(bool) {
    this.isLoading = bool;
  }

  @action.bound setUserDropdownView(bool) {
    this.userDropdownViewed = bool;
  }

  @action.bound toggleDropdownView() {
    this.userDropdownViewed = !this.userDropdownViewed;
  }
}

export default ViewStore;
