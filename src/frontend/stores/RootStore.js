import UIStore from './UIStore'

class RootStore {
  constructor() {
    this.uiStore = new UIStore(this);
  }
}

export default RootStore;