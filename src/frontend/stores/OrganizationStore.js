import { action } from 'mobx';
import Api from '../../models/Api';

class OrganizationStore {
  constructor(store, client) {
    this.store = store;
    this.api = new Api('api/organizations', client);
  }

  @action.bound async createOrganization(input) {
    try {
      return await this.api.create(input);
    } catch (e) {
      console.log(e);
    }
    return undefined;
  }
}

export default OrganizationStore;
