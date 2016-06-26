module.exports = function karmaConfig (config) {
  config.set({
    frameworks: [
      'mocha'
    ],

    reporters: [
      'nyan',
      'coverage'
    ],

    files: ['./test.iterator.js'],

    preprocessors: {
      './test.iterator.js': ['sourcemap', 'webpack']
    },

    browsers: [
      'PhantomJS'
    ],

    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        {type: 'text-summary'},
        {type: 'html'}
      ]
    },

    webpack: require('./webpack.config'),

    webpackMiddleware: {
      noInfo: true
    }
  });
};
