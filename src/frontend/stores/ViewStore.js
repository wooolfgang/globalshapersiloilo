import { action, observable } from 'mobx';

class ViewStore {
  constructor(store) {
    this.store = store;
  }
}

export default ViewStore;
