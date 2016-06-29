'use strict';

var webpackConfig = {
  entry: {
    watAspect: ['./src/watAspect.js'],
  },
  node: {
    global: true,
  },
  devtool: '#cheap-module-source-map',
  output: {
    path: './dist',
    filename: '[name].js',
    library: 'watAspect',
    libraryTarget: 'umd',
  },
  module: {
    preLoaders: [
      {
        loader: 'eslint-loader',
        test: /\.js$/,
        excludes: [/node_modules/],
      },
    ],
    loaders: [
      {
        loaders: ['babel-loader'],
        test: /\.js$/,
        excludes: [/node_modules/],
      },
    ],
  },
};

module.exports = webpackConfig;
