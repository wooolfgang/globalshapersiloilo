import UserStore from './UserStore';
import ViewStore from './ViewStore';

class RootStore {
  constructor(client) {
    this.userStore = new UserStore(this, client);
    this.ViewStore = new ViewStore(this);
  }
}

export default RootStore;
