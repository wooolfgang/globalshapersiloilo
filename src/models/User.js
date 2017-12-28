import { observable, action } from 'mobx';
import { UserSchema } from '../schema';
import Model from './Model';

class User extends Model {
  @observable projectIds;

  static get schema() {
    return UserSchema;
  }

  @action.bound addProjectId(projectId) {
    this.projectIds.push(projectId);
  }
}

export default User;
