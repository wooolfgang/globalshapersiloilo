import { action, observable, runInAction } from 'mobx';

class ViewStore {
  @observable isLoading = false;
  @observable userDropdownViewed = false;
  @observable orgActiveStepIndex = 0;
  @observable orgFormSuccessModalViewed = false;

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
}

export default ViewStore;
