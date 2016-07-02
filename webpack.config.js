'use strict';
const path = require('path');

module.exports = {
  entry: path.join(__dirname, './public/router.js'),
  output: {
    path: './public/js',
    filename: 'browser-bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
    ]
  }
};