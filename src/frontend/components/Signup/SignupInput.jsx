import React from 'react';
import { inject } from 'mobx-react';
import Input from '../Form/Input';

const SignupInput = props => (
  <Input {...props} inputWidth="200px" barWidth="215px" onChange={props.store.userStore.onSignupInput} />
);

export default inject('store')(SignupInput);
