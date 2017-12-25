import { computed } from 'mobx';
import { ProjectSchema } from '../schema/';
import Model from './Model';

class Project extends Model {
  static get schema() {
    return ProjectSchema;
  }

  @computed get getRemainingSlots() {
    return this.volunteersNeeded - this.volunteers.length;
  }
}

export default Project;
