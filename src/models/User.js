import { UserSchema } from '../schema';
import Model from './Model';

class User extends Model {
  static get schema() {
    return UserSchema;
  }
}

export default User;
