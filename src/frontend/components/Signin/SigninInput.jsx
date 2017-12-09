import React from 'react';
import { inject } from 'mobx-react';
import Input from '../Form/Input';

const SigninInput = props => (
  <Input {...props} inputWidth="285px" barWidth="300px" onChange={props.formsStore.handleUserSigninInput} />
);

export default inject('formsStore')(SigninInput);
