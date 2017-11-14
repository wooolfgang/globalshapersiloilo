import { observable, action } from 'mobx';
import * as errorState from '../../schema/errorStates';

class FormStore {
  @observable signinInput = {};
  @observable signupInput = {};
  @observable signupSuccess;
  @observable signupErrorMsg = errorState.userFormErrorState;
  @observable signinErrorMsg;
  @observable orgFormInputs = {};
  @observable orgFormErrorMsg = errorState.orgFormErrorState;
  @observable orgmFormHasError = false;

  constructor(store) {
    this.store = store;
  }

  @action.bound handleUserSigninInput(e) {
    this.signinErrorMsg = '';
    this.signinInput[e.target.id] = e.target.value;
  }

  @action.bound handleUserSignupInput(e) {
    this.signupErrorMsg = ''
    this.signupInput[e.target.id] = e.target.value;
  }

  @action.bound handleFormInput(e) {
    this.orgFormErrorMsg = initialErrorState;
    this.orgFormInputs[e.target.id] = e.target.value;
  }

  @action.bound formValidate() {
    this.formHasError = Joi.validate(this.orgFormInputs, projectSchema).error === null ? false : true;
    const e = Joi.validate(this.orgFormInputs, projectSchema).error;
    const key = e.details[0].context.key;
    const message = e.details[0].message;
    this.orgFormErrorMsg[key] = message;
  }
}

export default FormStore;
