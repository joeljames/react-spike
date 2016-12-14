const webpack = require('webpack');
const path = require('path');


const APP_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'public');
const ESLINT_CONFIG_FILE = path.join(__dirname, '.eslintrc');
const BUILD_FILE = 'bundle.js';

const config = {
  eslint: {
    configFile: ESLINT_CONFIG_FILE
  },
  entry: APP_DIR + '/index.jsx',
  output: {
      path: BUILD_DIR,
      filename: BUILD_FILE
  },
  module : {
    preLoaders: [
      {
        test: /\.jsx$/,
        include: [
          APP_DIR
        ],
        loader: 'eslint-loader'
      }
    ],
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  }
};

module.exports = config;
