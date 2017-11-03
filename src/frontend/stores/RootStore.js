import UserStore from './UserStore';
import ViewStore from './ViewStore';
import ProjectStore from './ProjectStore';

class RootStore {
  constructor(client) {
    this.userStore = new UserStore(this, client);
    this.projectStore = new ProjectStore(this, client);
    this.ViewStore = new ViewStore(this);
  }
}

export default RootStore;
