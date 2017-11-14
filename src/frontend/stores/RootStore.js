import UserStore from './UserStore';
import ViewStore from './ViewStore';
import ProjectStore from './ProjectStore';
import OrganizationStore from './OrganizationStore';
import FormsStore from './FormsStore';

class RootStore {
  constructor(client) {
    this.viewStore = new ViewStore(this);
    this.formsStore = new FormsStore(this);
    this.userStore = new UserStore(this, client);
    this.projectStore = new ProjectStore(this, client);
    this.organizationStore = new OrganizationStore(this, client);
  }
}

export default RootStore;
