// @flow

import React, { Component } from 'react';
import Confetti from 'react-dom-confetti';

const baseConfig = {
  spread: 120,
  startVelocity: 10,
  elementCount: 40,
  decay: 0.95,
  colors: ['#f6f42c', '#fffe4d', '#faf7e7', '#f9f8c7', '#504b00']
};

const leftConfig = Object.assign({}, baseConfig, { angle: 0 });
const rightConfig = Object.assign({}, baseConfig, { angle: 180 });

type Props = {
  code: string
};

type State = {
  celebrate: boolean
};

class PurchasedGift extends Component<Props, State> {
  state = { celebrate: false };

  componentDidMount() {
    window.scrollTo(0, 0);
    setTimeout(() => {
      this.setState({ celebrate: true });
    }, 1000);
    setTimeout(() => {
      this.setState({ celebrate: false });
    }, 1100);
    setTimeout(() => {
      this.setState({ celebrate: true });
    }, 2500);
  }

  render() {
    return (
      <div className="purchased-gift">
        <div className="confetti">
          <Confetti active={this.state.celebrate} config={leftConfig} />
          <Confetti active={this.state.celebrate} config={rightConfig} />
        </div>
        <h1>Thank you!</h1>
        <p>
          You&rsquo;re all set! Your gift code is below, but you&rsquo;ll also receive a
          confirmation email with the code. You can deliver the code to the person you purchased
          this gift for and direct them to{' '}
          <a href="https://yellowco.co/redeem">https://yellowco.co/redeem</a> in order to redeem it.
        </p>
        <h3>
          <small>Your Gift Code</small>
          <br />
          {this.props.code}
        </h3>
      </div>
    );
  }
}

export default PurchasedGift;
