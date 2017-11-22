const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './webpack/entry.jsx',
  output: {
    path: path.resolve(__dirname, 'src', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      Tether: 'tether'
    })
  ]
};
