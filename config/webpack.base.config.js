var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var config = {};

config.plugins = [];

config.entry = {
  app: './src/app/index.js'
};

config.output = {};

config.module = {
  preLoaders: [],
  loaders: [{
    test: /\.js$/,
    loader: 'babel',
    exclude: /node_modules/
  }, {
    test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file'
  }, {
    test: /\.(woff|woff2)$/, loader: 'file-loader?prefix=font/&limit=5000'
  }, {
    test: /\.ttf(\?v=\d+.\d+.\d+)?$/,
    loader: 'file-loader?limit=10000&mimetype=application/octet-stream'
  }, {
    test: /\.svg(\?v=\d+.\d+.\d+)?$/,
    loader: 'file-loader?limit=10000&mimetype=image/svg+xml'
  }, {
    test: /\.(jpe?g|png|gif)$/i,
    loaders: ['file']
  }, {
    test: /\.ico$/,
    loader: 'file-loader?name=[name].[ext]'
  }, {
    test: /\.json$/,
    loader: 'json'
  }, {
    test: /\.html$/,
    loader: 'html?attrs[]=img:src'
  }]
};

config.resolve = {
  extensions: ['', '.js', '.scss', '.css']
};

config.plugins.push(
  new HtmlWebpackPlugin({
    template: './src/public/index.html',
    inject: 'body'
  }),
  new webpack.NoErrorsPlugin()
);

module.exports = config;
