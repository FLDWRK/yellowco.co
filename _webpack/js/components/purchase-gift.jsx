// @flow

import React, { Component } from "react";
import { Elements } from "react-stripe-elements";
import { mapKeys, snakeCase } from "lodash";
import axios from "axios";
import PurchaseGiftForm from "./purchase-gift-form";
import PurchasedGift from "./purchased-gift";

type Props = {};

type State = {
  submitting: boolean,
  error: string,
  giftCode: string
};

class PurchaseGift extends Component<Props, State> {
  state = { submitting: false, error: "", giftCode: "" };

  handlePurchase = (gift: Object, token: string) => {
    this.setState({ submitting: true });
    axios
      .post("/gift", {
        gift: mapKeys(gift, (val, key) => {
          return snakeCase(key);
        }),
        token: token
      })
      .then(response => {
        this.setState({ submitting: false, giftCode: response.data.code });
      })
      .catch(error => {
        this.setState({ submitting: false, error: error.response.data.error });
      });
  };

  render() {
    return (
      <Elements>
        {this.state.giftCode ? (
          <div className="gave-a-gift">
            <PurchasedGift code={this.state.giftCode} />
            <p className="mt-4">
              <a href="/gift/purchase">&larr; Purchase another gift</a>
            </p>
          </div>
        ) : (
          <div className="give-a-gift">
            <PurchaseGiftForm
              onSubmit={this.handlePurchase}
              error={this.state.error}
              submitting={this.state.submitting}
            />
          </div>
        )}
      </Elements>
    );
  }
}

export default PurchaseGift;
