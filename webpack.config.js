const webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv-webpack');

module.exports = (env = {}) => {
  return {
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
            presets: ['env', 'react'],
            plugins: ['transform-object-rest-spread', 'transform-class-properties']
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
      }),
      new dotenv({
        path: `./.env${env.NODE_ENV === 'development' ? '.development' : ''}`
      })
    ]
  };
};
