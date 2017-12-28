// @flow

import React, { Component } from 'react';
import Spinner from '../utils/spinner';
import Form from '../forms/form';
import Input from '../forms/input';
import Select from '../forms/select';
import CreditCard from '../forms/credit-card';
import Button from '../forms/button';
import isRequired from '../validations/required';
import isEmail from '../validations/email';

type Props = {
  error: string,
  onSubmit: Function,
  submitting: boolean
};

type State = {
  submittable: boolean,
  submitting: boolean,
  firstName: string,
  lastName: string,
  email: string,
  giftValue: string
};

class PurchaseGiftForm extends Component<Props, State> {
  form: ?HTMLFormElement;
  creditCard: CreditCard;

  state = {
    submittable: false,
    submitting: false,
    firstName: '',
    lastName: '',
    email: '',
    giftValue: '33'
  };

  handleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCardComplete = (complete: boolean) => {
    this.setState({ submittable: complete });
  };

  handleSubmit = () => {
    this.setState({ submitting: true });
    this.creditCard.wrappedCreateToken().then(({ error, token }) => {
      this.setState({ submitting: false });
      if (!error) {
        this.props.onSubmit(
          {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            giftValue: this.state.giftValue
          },
          token.id
        );
      }
    });
  };

  render() {
    return (
      <Form
        className="purchase-gift-form"
        onSubmit={this.handleSubmit}
        ref={el => {
          this.form = el;
        }}>
        {this.props.error ? <div className="alert alert-warning">{this.props.error}</div> : ''}
        <div className="row">
          <div className="col-sm">
            <h5 className="text-uppercase">From</h5>
            <Input
              name="firstName"
              label="First name"
              placeholder="Your first name"
              disabled={this.state.submitting || this.props.submitting}
              validations={[isRequired]}
              onChange={this.handleChange}
              value={this.state.firstName}
            />
            <Input
              name="lastName"
              label="Last name"
              placeholder="Your last name"
              disabled={this.state.submitting || this.props.submitting}
              validations={[isRequired]}
              onChange={this.handleChange}
              value={this.state.lastName}
            />
            <Input
              type="email"
              name="email"
              label="Email address"
              placeholder="Your email address"
              disabled={this.state.submitting || this.props.submitting}
              note="* We&rsquo;ll never share your email with anyone else."
              validations={[isRequired, isEmail]}
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
          <div className="col-sm">
            <h5 className="text-uppercase">Gift</h5>
            <Select
              name="giftValue"
              label="Gift amount"
              disabled={this.state.submitting || this.props.submitting}
              note="* International shipping prices vary, but the full dollar amount will be credited to
              their account."
              onChange={this.handleChange}
              value={this.state.giftValue}>
              <option value="33">1 month ($33)</option>
              <option value="66">2 months ($66)</option>
              <option value="99">3 months ($99)</option>
              <option value="132">4 months ($132)</option>
              <option value="165">5 months ($165)</option>
              <option value="198">6 months ($198)</option>
              <option value="231">7 months ($231)</option>
              <option value="264">8 months ($264)</option>
              <option value="297">9 months ($297)</option>
              <option value="330">10 months ($330)</option>
              <option value="363">11 months ($363)</option>
              <option value="396">12 months ($396)</option>
            </Select>
            <CreditCard
              ref={el => {
                this.creditCard = el;
              }}
              onComplete={this.handleCardComplete}
              disabled={this.state.submitting || this.props.submitting}
            />
          </div>
        </div>
        <div className="pos-relative">
          <Button
            className="btn-primary btn-lg"
            disabled={!this.state.submittable || this.state.submitting || this.props.submitting}
            onClick={this.handleSubmit}>
            Purchase
          </Button>
          {this.state.submitting || this.props.submitting ? <Spinner right /> : ''}
        </div>
      </Form>
    );
  }
}

export default PurchaseGiftForm;
