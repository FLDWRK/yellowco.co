// @flow

import React, { Component } from 'react';
import Spinner from 'spin.js';

type Props = {
  right?: boolean,
  config?: Object
};

class ReactSpinner extends Component<Props> {
  spinner: Object;
  container: ?HTMLSpanElement;

  componentDidMount() {
    const { config } = this.props;
    const spinConfig = {
      lines: 8,
      length: 7,
      width: 7,
      radius: 0,
      color: '#ccc',
      hwaccel: true,
      ...config
    };
    if (this.props.right) spinConfig['left'] = `calc(100% - ${spinConfig.width * 2}px)`;

    this.spinner = new Spinner(spinConfig);
    this.spinner.spin(this.container);
  }

  componentWillUnmount() {
    this.spinner.stop();
  }

  render() {
    return (
      <span
        ref={c => {
          this.container = c;
        }}
      />
    );
  }
}

export default ReactSpinner;
