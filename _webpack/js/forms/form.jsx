// @flow

import React from 'react';
import type { Node } from 'react';
import classnames from 'classnames';
import { form } from 'react-validation';

type Props = {
  getValues: Function,
  validate: Function,
  validateAll: Function,
  showError: Function,
  hideError: Function,
  children: ?Node,
  className?: string
};

const Form = ({ children, ...props }: Props) => (
  <form {...props} className={classnames(['form', props.className])}>
    {children}
  </form>
);

export default form(Form);
