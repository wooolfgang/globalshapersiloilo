import Model from './Model';

class Project extends Model {
  getRemainingSlots() {
    return this.volunteersNeeded - this.volunteers.length;
  }
}

export default Project;
