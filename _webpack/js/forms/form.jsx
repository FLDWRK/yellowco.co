import React from 'react';
import classnames from 'classnames';
import { form } from 'react-validation';

const Form = ({ getValues, validate, validateAll, showError, hideError, children, ...props }) => (
  <form {...props} className={classnames(['form', props.className])}>
    {children}
  </form>
);

export default form(Form);
