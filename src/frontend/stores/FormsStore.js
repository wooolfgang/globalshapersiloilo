import { observable, action } from 'mobx';
import Joi from 'joi';
import * as errorState from '../../schema/errorStates';
import * as schema from '../../schema';

class FormStore {
  @observable signinInput = {};
  @observable signupInput = {};
  @observable signupSuccess;
  @observable signupErrorMsg = errorState.userFormErrorState;
  @observable signinErrorMsg;
  @observable orgFormInputs = {};
  @observable orgFormErrorMsg = errorState.orgFormErrorState;
  @observable orgFormHasError = false;
  @observable projectFormInputsFirst = {};
  @observable projectFormInputsFirstHasError = false;
  @observable projectFormInputsFirstErrorMsg = errorState.projectFormFirstErrorState;
  @observable projectFormInputsSecond = {};
  @observable projectFormInputsSecondHasError = false;
  @observable projectFormInputsSecondErrorMsg = errorState.projectFormSecondErrorState;

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

  @action.bound handleOrgFormInput(e) {
    this.orgFormErrorMsg = errorState.orgFormErrorState;
    this.orgFormInputs[e.target.id] = e.target.value;
  }

  @action.bound handleProjectFormFirstInput(e) {
    this.projectFormInputsFirstErrorMsg = errorState.projectFormFirstErrorState;
    this.projectFormInputsFirst[e.target.id] = e.target.value;
  }

  @action.bound handleProjectFormSecondInput(e) {
    this.projectFormInputsSecondErrorMsg = errorState.projectFormSecondErrorState;
    this.projectFormInputsSecond[e.target.id] = e.target.value;
  }

  @action.bound formValidate(formInputs, schema, hasErrorField, errorMsgField) {
    this[hasErrorField] = Joi.validate(formInputs, schema).error === null ? false : true;

    if (this[hasErrorField]) {
      const e = Joi.validate(formInputs, schema).error;
      const key = e.details[0].context.key;
      const message = e.details[0].message;
      this[errorMsgField][key] = message;
      console.log(e);
      console.log(this[errorMsgField]);
    }
  }

  @action.bound async orgFormHandleNextStep() {
    if (this.store.viewStore.orgActiveStepIndex === 0) {
      this.formValidate(this.orgFormInputs, schema.OrganizationSchema, 'orgFormHasError', 'orgFormErrorMsg');
      if (!this.orgFormHasError) {
        this.store.viewStore.orgActiveStepIndex = this.store.viewStore.orgActiveStepIndex + 1;
      }
    } else if (this.store.viewStore.orgActiveStepIndex === 1) {
      this.formValidate(this.projectFormInputsFirst, schema.ProjectSchemaFirst, 'projectFormInputsFirstHasError', 'projectFormInputsFirstErrorMsg');
      if (!this.projectFormInputsFirstHasError) {
        this.store.viewStore.orgActiveStepIndex = this.store.viewStore.orgActiveStepIndex + 1;
      }
    } else if (this.store.viewStore.orgActiveStepIndex === 2) {
      this.formValidate(this.projectFormInputsSecond, schema.ProjectSchemaSecond, 'projectFormInputsSecondHasError', 'projectFormInputsSecondErrorMsg');
      if (!this.projectFormInputsSecondHasError) {
        const organization = await this.store.organizationStore.createOrganization(this.orgFormInputs);
        await this.store.projectStore.createProject({ organizationId: organization._id, ...this.projectFormInputsFirst, ...this.projectFormInputsSecond });
      }
    }
  }

  @action.bound orgFormHandlePrevStep() {
    this.store.viewStore.orgActiveStepIndex = this.store.viewStore.orgActiveStepIndex - 1;
  }
}

export default FormStore;
