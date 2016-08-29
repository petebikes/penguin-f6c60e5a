var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname,

  resolve: {
    extensions: ['', '.js', '.json'],
    modulesDirectories: [
      'js',
      'node_modules'
    ]
  },

  entry: {
    appInit: ['app/_init'],
    common: [
      'jquery',
      'lodash'
    ]
  },

  output: {
    path: path.resolve(__dirname, './build'),
    pathinfo: true,
    filename: '[name].js'
  },

  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: "underscore-template-loader",
        query: {
            engine: "lodash",
        }
      }
    ],
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      _: 'lodash',
      jQuery: 'jquery'
    })
  ]
};