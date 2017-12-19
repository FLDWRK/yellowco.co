import React, { Component } from 'react';
import { Elements } from 'react-stripe-elements';
import { mapKeys, snakeCase } from 'lodash';
import axios from 'axios';
import PurchaseGiftForm from './purchase-gift-form';
import PurchasedGift from './purchased-gift';

class PurchaseGift extends Component {
  state = { purchased: false, submitting: false, error: '', giftCode: '' };

  handlePurchase = (gift, token) => {
    this.setState({ submitting: true });
    axios
      .post('/gift', {
        gift: mapKeys(gift, (val, key) => {
          return snakeCase(key);
        }),
        token: token
      })
      .then(response => {
        this.setState({ submitting: false, purchased: true, giftCode: response.data.code });
      })
      .catch(error => {
        this.setState({ submitting: false, error: error.response.data.error });
      });
  };

  render() {
    return (
      <Elements>
        {this.state.purchased ? (
          <div className="gave-a-gift">
            <PurchasedGift code={this.state.giftCode} />
          </div>
        ) : (
          <div className="give-a-gift">
            <h1>Gift the Collective</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <ol>
              <li>Enter your information and purchase your gift</li>
              <li>Receive an email with a printable certificate and unique gift code</li>
              <li>Deliver your gift by printing or emailing the code</li>
            </ol>
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
