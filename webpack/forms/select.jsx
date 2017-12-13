import React from 'react';
import classnames from 'classnames';
import { control } from 'react-validation';

const Select = ({ error, isChanged, isUsed, label, note, ...props }) => (
  <div className={classnames(['form-group', { 'has-danger': isUsed && error }])}>
    <select
      {...props}
      className={classnames([
        'form-control',
        props.className,
        { 'form-control-danger is-invalid': isUsed && error }
      ])}
    />
    {isUsed && error ? (
      <small className="form-text form-control-feedback invalid-feedback">{error}</small>
    ) : (
      ''
    )}
    {note ? <small className="form-text text-muted">{note}</small> : ''}
  </div>
);

export default control(Select);
