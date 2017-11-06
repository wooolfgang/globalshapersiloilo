import UserStore from './UserStore';
import ViewStore from './ViewStore';
import ProjectStore from './ProjectStore';

class RootStore {
  constructor(client) {
    this.viewStore = new ViewStore(this);
    this.userStore = new UserStore(this, client);
    this.projectStore = new ProjectStore(this, client);
  }
}

export default RootStore;
