import { ProjectSchema } from '../schema/';
import Model from './Model';

class Project extends Model {
  static get schema() {
    return ProjectSchema;
  }

  getRemainingSlots() {
    return this.volunteersNeeded - this.volunteers.length;
  }
}

export default Project;
