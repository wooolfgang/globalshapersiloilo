import UIStore from './UIStore'
<<<<<<< HEAD
import client from '../client';
=======
>>>>>>> c06596ead2ac4307b8e1cccdeb3d6637982a99b8

class RootStore {
  constructor() {
    this.uiStore = new UIStore(this);
  }
}

export default RootStore;