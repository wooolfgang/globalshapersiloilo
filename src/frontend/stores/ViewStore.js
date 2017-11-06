import { action, observable } from 'mobx';

class ViewStore {
  @observable isLoading = false;
  @observable userDropdownViewed = false;

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
