import { observable, action, runInAction } from 'mobx';
import Api from '../../models/Api';

class PostsStore {
  @observable posts = [];

  constructor(store, client) {
    this.store = store;
    this.api = new Api('api/posts', client);
  }

  @action.bound async fetchPosts() {
    try {
      const posts = await this.api.find();
      runInAction(() => { this.posts = posts; });
    } catch (e) {
      console.log(e);
    }
  }
}

export default PostsStore;
