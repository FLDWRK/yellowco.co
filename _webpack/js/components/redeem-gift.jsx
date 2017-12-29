// @flow

import React, { Component } from "react";
import axios from "axios";
import RedeemGiftForm from "./redeem-gift-form";
import RedeemedGift from "./redeemed-gift";

type Props = {};

type State = {
  submitting: boolean,
  error: string,
  giftCode: string,
  giftValue: string
};

class RedeemGift extends Component<Props, State> {
  state = { submitting: false, error: "", giftCode: "", giftValue: "" };

  handleSubmit = (giftCode: string) => {
    this.setState({ submitting: true });
    axios
      .get("/gift", { params: { code: giftCode } })
      .then(response => {
        this.setState({
          submitting: false,
          giftCode: response.data.code,
          giftValue: response.data.giftValue
        });
      })
      .catch(error => {
        this.setState({ submitting: false, error: error.response.data.error });
      });
  };

  render() {
    return (
      <div className="redeem-gift">
        {this.state.giftCode ? (
          <RedeemedGift giftValue={this.state.giftValue} />
        ) : (
          <div className="redeem-gift">
            <RedeemGiftForm
              error={this.state.error}
              submitting={this.state.submitting}
              onSubmit={this.handleSubmit}
            />
          </div>
        )}
      </div>
    );
  }
}

export default RedeemGift;
