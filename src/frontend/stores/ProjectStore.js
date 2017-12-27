import { observable, action, runInAction, computed } from 'mobx';
import Api from '../../models/Api';

class ProjectStore {
  @observable projects = [];
  @observable searchResults = [];
  @observable hasSearched = false;
  @observable searchInput = '';

  constructor(store, client) {
    this.store = store;
    this.projectApi = new Api('api/projects', client);
    this.volunteersApi = new Api('api/projectvolunteers', client);
    this.setIsLoading = store.viewStore.setIsLoading;
  }

  @action.bound async createProject(project) {
    try {
      return this.projectApi.create(project);
    } catch (e) {
      console.log(e);
    }
    return null;
  }

  @action.bound async fetchProjects() {
    try {
      this.setIsLoading(true);
      const { data } = await this.projectApi.find();
      runInAction(() => { this.setIsLoading(false); this.projects = data; });
    } catch (e) {
      this.setIsLoading(false);
      console.log(e);
    }
  }

  @action.bound async fetchProject(projectId) {
    try {
      return this.projectApi.get(projectId);
    } catch (e) {
      console.log(e);
    }
    return null;
  }

  @action.bound async addVolunteer(projectId, volunteerId) {
    try {
      await this.volunteersApi.create({ projectId, userId: volunteerId });
      this.store.viewStore.closeVolunteerModal();
    } catch (e) {
      console.log(e);
    }
  }

  @action.bound async search() {
    try {
      runInAction(() => { this.setIsLoading(true); this.hasSearched = true; });
      const { data } = await this.projectApi.search(this.searchInput);
      runInAction(() => { this.setIsLoading(false); this.searchResults = data; });
    } catch (e) {
      this.setIsLoading(false);
      console.log(e);
    }
  }

  @action.bound resetSearchFields() {
    runInAction(() => {
      this.hasSearched = false;
      this.searchInput = '';
      this.searchResults = [];
    });
  }

  @action.bound handleInputChange(e) {
    this.searchInput = e.target.value;
  }
}

export default ProjectStore;
