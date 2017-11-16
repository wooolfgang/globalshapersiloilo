import { OrganizationSchema } from '../schema/';
import Model from './Model';

class Organization extends Model {
  static get schema() {
    return OrganizationSchema;
  }
}

export default Organization;
