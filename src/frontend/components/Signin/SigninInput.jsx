import React from 'react';
import { inject } from 'mobx-react';
import { instanceOf } from 'prop-types';
import Input from '../Form/Input';
import FormsStore from '../../stores/FormsStore';

const SigninInput = props => (
  <Input {...props} inputWidth="285px" barWidth="300px" onChange={props.formsStore.handleUserSigninInput} />
);

SigninInput.propTypes = {
  formsStore: instanceOf(FormsStore).isRequired,
};

export default inject('formsStore')(SigninInput);
