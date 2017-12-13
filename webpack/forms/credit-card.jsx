import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import classnames from 'classnames';

class CreditCard extends Component {
  state = {
    focused: false,
    complete: false,
    error: ''
  };

  handleChange = e => {
    this.setState({ error: e.error && e.error.message, complete: e.complete });
    if (this.props.onComplete) {
      this.props.onComplete(e.complete);
    }
  };

  handleFocus = () => {
    this.setState({ focused: true });
  };

  handleBlur = () => {
    if (!this.state.complete && !this.state.error)
      this.setState({ error: 'All credit card details are required' });
  };

  createToken = () => {
    return this.props.stripe.createToken({}).then(({ error }) => {
      if (error) this.setState({ error: error });
    });
  };

  clear = () => {
    this.cardElement.clear();
  };

  render() {
    return (
      <div
        className={classnames('credit-card form-group', {
          'has-danger': this.state.error,
          disabled: this.props.disabled
        })}>
        <CardElement
          className={classnames([
            'form-control',
            this.props.className,
            { 'form-control-danger is-invalid': this.state.error }
          ])}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          elementRef={el => (this.cardElement = el)}
        />
        {this.state.error ? (
          <small className="form-text form-control-feedback invalid-feedback">
            {this.state.error}
          </small>
        ) : (
          ''
        )}
        {this.props.note ? <small className="form-text text-muted">{this.props.note}</small> : ''}
      </div>
    );
  }
}

export default injectStripe(CreditCard);
