var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {};

config.plugins = [];

config.output = {
  path: './dist',
  publicPath: './',
  filename: '[name].[hash].js',
  chunkFilename: '[name].[hash].js'
};

config.module = {
  preLoaders: [],
  loaders: [{
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('style', 'css!sass?sourceMap!postcss')
  }, {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')
  }]
};

config.postcss = [
  autoprefixer({
    browsers: ['last 2 version']
  })
];

config.plugins.push(
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin('[name].[hash].css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new CopyWebpackPlugin([{
      from: path.join(__dirname, 'public')
    }]),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
);

module.exports = config;
