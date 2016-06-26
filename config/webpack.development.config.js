var config = {};

config.devtool = 'cheap-module-eval-source-map';
config.debug = true;
config.noInfo = true;

config.devServer = {
  stats: 'minimal',
  port: 8080
};

config.module = {
  loaders: [{
    test: /\.scss$/,
    loader: 'style!css!sass'
  }, {
    test: /\.css$/,
    loader: 'style!css'
  }]
};

module.exports = config;
