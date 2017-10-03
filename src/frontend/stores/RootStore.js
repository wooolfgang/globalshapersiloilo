import UserStore from './UserStore';
import UIStore from './UIStore';

class RootStore {
  constructor(client) {
    this.userStore = new UserStore(this, client);
    this.uiStore = new UIStore(this);
  }
}

export default RootStore;
