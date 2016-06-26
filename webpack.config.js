const merge = require('webpack-merge');

const baseConfig = require('./config/webpack.base.config');

const testConfig = require('./config/webpack.test.config');
const prodConfig = require('./config/webpack.production.config');
const devConfig = require('./config/webpack.development.config');

const ENV = process.env.npm_lifecycle_event;

const isTest = ENV === 'test' || ENV === 'test-watch';
const isProd = ENV === 'build';
const isDev = ENV === 'development';

console.log(ENV);

let config = {};

if (isTest) config = testConfig;
if (isProd) config = prodConfig;
if (isDev) config = devConfig;

const finalConfig = merge(baseConfig, config);

module.exports = finalConfig;
