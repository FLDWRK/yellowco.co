// @flow

import React from 'react';
import classnames from 'classnames';
import { button } from 'react-validation';

type Props = {
  hasErrors: boolean,
  className: string,
  disabled: boolean
};

const Button = ({ hasErrors, className, ...props }: Props) => {
  return (
    <button
      {...props}
      className={classnames('btn', className)}
      disabled={hasErrors || props.disabled}>
      Purchase
    </button>
  );
};

export default button(Button);
