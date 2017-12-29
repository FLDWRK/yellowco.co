// @flow

import React, { Component } from "react";
import Confetti from "react-dom-confetti";

const baseConfig = {
  spread: 120,
  startVelocity: 10,
  elementCount: 40,
  decay: 0.95,
  colors: ["#f6f42c", "#fffe4d", "#faf7e7", "#f9f8c7", "#504b00"]
};

const leftConfig = Object.assign({}, baseConfig, { angle: 0 });
const rightConfig = Object.assign({}, baseConfig, { angle: 180 });

type Props = {
  giftValue: string
};

type State = {
  celebrate: boolean
};

class RedeemedGift extends Component<Props, State> {
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
      <div className="redeemed-gift">
        <div className="confetti">
          <Confetti active={this.state.celebrate} config={leftConfig} />
          <Confetti active={this.state.celebrate} config={rightConfig} />
        </div>
        <h1>Congrats!</h1>
        <p>
          You&rsquo;re all set! Your gift value is below. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.{" "}
        </p>
        <h3>
          <small>Your Gift Value</small>
          <br />
          {this.props.giftValue}
        </h3>
      </div>
    );
  }
}

export default RedeemedGift;
