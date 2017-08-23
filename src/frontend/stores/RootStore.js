import UIStore from './UIStore'
import client from '../client';

class RootStore {
  constructor() {
    this.uiStore = new UIStore(this);
  }
}

export default RootStore;