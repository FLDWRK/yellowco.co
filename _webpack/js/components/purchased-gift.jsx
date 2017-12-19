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

class PurchasedGift extends Component {
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
      <h1 className="d-flex">
        <Confetti active={this.state.celebrate} config={leftConfig} />
        <span className="d-block w-100 text-center">Thank you!</span>
        <Confetti active={this.state.celebrate} config={rightConfig} />
      </h1>
    );
  }
}

export default PurchasedGift;
