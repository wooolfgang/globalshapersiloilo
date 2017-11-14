import React from 'react';
import { inject } from 'mobx-react';
import Input from '../Form/Input';

const FormInput = props => (
  <Input {...props} inputWidth="370px" barWidth="385px" />
);

export default inject('store')(FormInput);
