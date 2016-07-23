const merge = require('webpack-merge');

import baseConfig from './webpack/webpack.base.config';
import prodConfig from './webpack/webpack.production.config';
import devConfig from './webpack/webpack.development.config';

const TASK = process.env.npm_lifecycle_event;

const isProd = TASK === 'build';
const isDev = TASK === 'start:dev';

let config = {};

if (isProd) config = prodConfig;
if (isDev) config = devConfig;

const finalConfig = merge(baseConfig, config);

export default finalConfig;
