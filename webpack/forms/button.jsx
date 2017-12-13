import React from 'react';
import classnames from 'classnames';
import { button } from 'react-validation';

const Button = ({ hasErrors, className, ...props }) => {
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
