import { observable, action, runInAction } from 'mobx';
import Api from '../../models/Api';

class PostsStore {
  @observable posts = [];
  @observable postInputMessage;
  @observable isPosting = false;

  constructor(store, client) {
    this.store = store;
    this.api = new Api('api/posts', client);
  }

  @action.bound async fetchPosts() {
    try {
      const posts = await this.api.find({ $sort: { createdAt: -1 } });
      runInAction(() => { this.posts = posts; });
    } catch (e) {
      console.log(e);
    }
  }

  @action.bound async createPost() {
    try {
      if (!this.postInputMessage) return;
      runInAction(() => { this.isPosting = true; });
      const ownerId = this.store.userStore.currentUser._id;
      const res = await this.api.create({ ownerId, post: this.postInputMessage });
      this.addPost(res);
      this.handlePostInput('');
      runInAction(() => { this.isPosting = false; });
    } catch (e) {
      console.log(e);
      runInAction(() => { this.isPosting = false; });
    }
  }

  @action.bound handlePostInput(value) {
    this.postInputMessage = value;
  }

  @action.bound addPost(post) {
    this.posts.unshift(post);
  }
}

export default PostsStore;
