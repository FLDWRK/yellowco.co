// @flow

import React from "react";
import type { Node } from "react";
import classnames from "classnames";
import { button } from "react-validation";

type Props = {
  hasErrors: boolean,
  className: string,
  disabled: boolean,
  children: ?Node
};

const Button = ({ children, hasErrors, className, ...props }: Props) => {
  return (
    <button
      {...props}
      className={classnames("btn", className)}
      disabled={hasErrors || props.disabled}
    >
      {children}
    </button>
  );
};

export default button(Button);
