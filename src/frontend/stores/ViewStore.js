import { action, observable } from 'mobx';

class ViewStore {
  @observable isLoading = false;

  constructor(store) {
    this.store = store;
  }

  @action.bound setIsLoading(bool) {
    this.isLoading = bool;
  }
}

export default ViewStore;
