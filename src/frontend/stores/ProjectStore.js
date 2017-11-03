import { observable, action, runInAction } from 'mobx';

class ProjectStore {
  @observable projects = [];
  @observable isFetching = false;

  constructor(store, client) {
    this.store = store;
    this.client = client;
  }

  @action.bound async fetchProjects() {
    try {
      runInAction(() => this.isFetching = true);
      const projects = await this.client.service('api/projects').find();
      runInAction(() => { this.isFetching = true; this.projects = projects; });
    } catch (e) {
      console.log(e);
    }
  }
}

export default ProjectStore;
