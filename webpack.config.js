const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?http://localhost:3000/',
    './src/frontend/index.jsx',
  ],

  output: {
    path: path.join(process.cwd(), '/public/js/'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  module: {
    rules: [{
      test: /\.jsx?$/,
      use: [{
        loader: 'babel-loader',
      }],
      exclude:
      /node_modules/,
    }, {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'url-loader',
        }],
    }],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      joi: 'joi-browser',
    },
  },
};
