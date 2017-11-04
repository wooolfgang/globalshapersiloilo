import { observable, action, runInAction } from 'mobx';
import Api from '../../models/Api';

class ProjectStore {
  @observable projects = [];
  @observable searchResults = [];
  @observable isFetching = false;
  @observable hasSearched = false;
  @observable searchInput = '';

  constructor(store, client) {
    this.store = store;
    this.client = client;
    this.api = new Api('api/projects', client);
  }

  @action.bound async fetchProjects() {
    try {
      runInAction(() => this.isFetching = true);
      const projects = await this.api.fetchAll();
      runInAction(() => { this.isFetching = true; this.projects = projects; });
    } catch (e) {
      console.log(e);
    }
  }

  @action.bound async search() {
    try {
      runInAction(() => { this.isFetching = true; this.hasSearched = true });
      const projects = await this.api.search(this.searchInput);
      runInAction(() => { this.isFetching = false; this.searchResults = projects; });
    } catch (e) {
      runInAction(() => this.isFetching = false);
      console.log(e);
    }
  }

  @action.bound resetSearchFields() {
    runInAction(() => {
      this.hasSearched = false;
      this.searchInput = '';
      this.searchResults = []
    });
  }

  @action.bound handleInputChange(e) {
    this.searchInput = e.target.value;
  }
}

export default ProjectStore;
