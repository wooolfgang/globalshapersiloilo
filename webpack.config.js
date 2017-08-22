const path = require('path');

module.exports = {
  entry: [
    './src/frontend/index.jsx',
  ],

  output: {
    path: path.join(process.cwd(), '/public/js/'),
    filename: 'bundle.js',
    publicPath: '/',
  },

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
          loader: 'url-loader'
        }],
    }]
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
