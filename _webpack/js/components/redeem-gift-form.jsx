// @flow

import React, { Component } from "react";
import Spinner from "../utils/spinner";
import Form from "../forms/form";
import Input from "../forms/input";
import Button from "../forms/button";
import isRequired from "../validations/required";

type Props = {
  error: string,
  onSubmit: Function,
  submitting: boolean
};

type State = {
  submitting: boolean,
  giftCode: string
};

class RedeemGiftForm extends Component<Props, State> {
  form: ?HTMLFormElement;

  state = {
    submitting: false,
    giftCode: ""
  };

  handleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    this.setState({ submitting: true });
    this.props.onSubmit(this.state.giftCode);
    this.setState({ submitting: false });
  };

  render() {
    return (
      <Form
        className="redeem-gift-form"
        onSubmit={this.handleSubmit}
        ref={el => {
          this.form = el;
        }}
      >
        <h1>Redeem a Gift</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        {this.props.error ? (
          <div className="alert alert-warning">{this.props.error}</div>
        ) : (
          ""
        )}
        <div className="row">
          <div className="col-sm">
            <h5 className="text-uppercase">Gift Code</h5>
            <Input
              name="giftCode"
              label="Gift code"
              placeholder="Your gift code"
              disabled={this.state.submitting || this.props.submitting}
              validations={[isRequired]}
              onChange={this.handleChange}
              value={this.state.giftCode}
            />
          </div>
        </div>
        <div className="pos-relative">
          <Button
            className="btn-primary btn-lg"
            disabled={this.state.submitting || this.props.submitting}
            onClick={this.handleSubmit}
          >
            Redeem
          </Button>
          {this.state.submitting || this.props.submitting ? (
            <Spinner right />
          ) : (
            ""
          )}
        </div>
      </Form>
    );
  }
}

export default RedeemGiftForm;
