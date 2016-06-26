var config = {};

config.entry = {};
config.output = {};
config.plugins = [];
config.module = {
  preLoaders: [],
  loaders: []
};

config.devtool = 'inline-source-map';

config.module.loaders = [
  {
    test: /\.scss$/,
    loader: 'style!css!sass'
  }, {
    test: /\.css$/,
    loader: 'style!css'
  }
];

config.module.preLoaders.push({
  test: /\.js$/,
  exclude: [
    /node_modules/,
    /\.spec\.js$/,
    /\.test\.js$/
  ],
  loader: 'isparta-instrumenter'
});

module.exports = config;
