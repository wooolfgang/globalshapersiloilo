import { action, observable } from 'mobx';

class ViewStore {
  @observable isLoading = false;
  @observable userDropdownViewed = false;
  @observable orgActiveStepIndex = 0;
  @observable orgFormSuccessModalViewed = false;
  @observable volunteerModalViewed = false;
  @observable signInModalViewed = false;

  constructor(store) {
    this.store = store;
  }

  @action.bound setIsLoading(bool) {
    this.isLoading = bool;
  }

  @action.bound setUserDropdownView(bool) {
    this.userDropdownViewed = bool;
  }

  @action.bound toggleDropdownView() {
    this.userDropdownViewed = !this.userDropdownViewed;
  }

  @action.bound toggleOrgFormSuccessModal() {
    this.orgFormSuccessModalViewed = !this.orgFormSuccessModalViewed;
  }

  @action.bound closeOrgFormSuccessModal() {
    this.orgFormSuccessModalViewed = false;
  }

  @action.bound toggleVolunteerModal() {
    this.volunteerModalViewed = !this.volunteerModalViewed;
  }

  @action.bound closeVolunteerModal() {
    this.volunteerModalViewed = false;
  }

  @action.bound toggleSigninModal() {
    this.signInModalViewed = !this.signInModalViewed;
  }

  @action.bound closeSigninModal() {
    this.signInModalViewed = false;
  }
}

export default ViewStore;
