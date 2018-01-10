import { observable, action, runInAction } from 'mobx';
import Api from '../../models/Api';

class ChatStore {
  @observable currentProjectId; // the viewed chat room's projectId
  @observable messages; // messages relating to the viewed project
  @observable messageInput;

  constructor(store, client) {
    this.store = store;
    this.chatApi = new Api('api/projectchat', client);
    client.service('api/projectchat').on('created', (data) => {
      runInAction(() => this.messages.push(data));
    });
  }

  @action.bound async sendMessage() {
    try {
      if (this.messageInput) {
        await this.chatApi.create({
          value: this.messageInput,
          sentById: this.store.userStore.currentUser._id,
          projectId: this.currentProjectId,
        });
      }
      runInAction(() => { this.messageInput = ''; });
    } catch (e) {
      console.log(e);
    }
  }

  @action.bound async fetchMessages(projectId) {
    return this.chatApi.find({ projectId });
  }

  @action.bound setMessages(messages) {
    this.messages = messages;
  }

  @action.bound handleMessageInputChange(message) {
    this.messageInput = message;
  }

  @action.bound setCurrentProjectId(id) {
    this.currentProjectId = id;
  }
}

export default ChatStore;
