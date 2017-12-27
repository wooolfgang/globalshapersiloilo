import { computed } from 'mobx';
import { ProjectSchema } from '../schema/';
import Model from './Model';

class Project extends Model {
  static get schema() {
    return ProjectSchema;
  }

  @computed get getRemainingSlots() {
    let volunteerSize;
    
    if (this.volunteers instanceof Array) {
      volunteerSize = this.volunteers.length;
    } else if (this.volunteers) {
      volunteerSize = 1;
    } else {
      volunteerSize = 0;
    }
    return this.volunteersNeeded - volunteerSize;
  }
}

export default Project;
