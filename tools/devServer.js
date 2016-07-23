import browserSync from 'browser-sync';
import historyApiFallback from 'connect-history-api-fallback';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config from '../webpack.config.js';

const bundler = webpack(config);

browserSync({
  port: 8080,
  ui: {
    port: 8081
  },
  server: {
    baseDir: 'app',
    middleware: [
      historyApiFallback(),
      webpackDevMiddleware(bundler, {
        publicPath: config.output.publicPath,
        noInfo: false,
        quiet: true,
        stats: {
          assets: false,
          colors: true,
          version: false,
          hash: false,
          timings: false,
          chunks: false,
          chunkModules: false
        }
      })
    ]
  },
  files: [
    'app/**/*.js',
    'app/**/*.html',
    'public/**/*.html',
    'public/**/*.(css|scss)'
  ]
});
