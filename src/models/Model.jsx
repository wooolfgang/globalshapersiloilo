import Joi from 'joi';

class Model {
  constructor(docs) {
    Object.assign(this, docs);
  }

  static get schema() {
    return {};
  }

  validate() {
    return Joi.validate(this, this.constructor.schema);
  }

  isValid() {
    return this.validate().error === null;
  }
}

export default Model;
