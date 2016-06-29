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
    filename: '[name].browser.js',
    library: 'watAspect',
    libraryTarget: 'var',
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
      {
        include: [
          require.resolve('./src/watAspect'),
        ],
        loader: 'imports?this=>window',
      },
    ],
  },
};

module.exports = webpackConfig;
