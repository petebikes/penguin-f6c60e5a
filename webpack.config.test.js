var path = require('path');
var webpack = require('webpack');

config = require('./webpack.config.js');

config.entry = {
  testExamplePage: ['./tests/testExamplePage']
};

config.output = {
  path: path.resolve(__dirname, './tests/build'),
  pathinfo: true,
  filename: '[name].js'
};

module.exports = config;