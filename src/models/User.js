import Joi from 'joi';
import Model from './Model';

class User extends Model {
  static get schema() {
    return {
      _id: Joi.optional(),
      username: Joi.string().min(6).max(30).required(),
      password: Joi.string().min(6).max(30).required(),
      email: Joi.string().email().required(),
      fullName: Joi.string().required(),
      birthDay: Joi.string(),
      address: Joi.string(),
      phoneNumber: Joi.string(),
      occupation: Joi.string(),
      affiliation: Joi.string(),
      provider: Joi.string(),
    };
  }
}

export default User;
