var path = require('path');
var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};
webpackConfig.plugins = {};
webpackConfig.devtool = 'inline-source-map';
webpackConfig.module.preLoaders = [
  {
    test: /\.js$/,
    exclude: path.resolve(__dirname, 'node_modules'),
    loader: 'isparta'
  }
];
webpackConfig.externals = {
  'react/addons': true,
  'react/lib/ExecutionEnvironment': true,
  'react/lib/ReactContext': true
};

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    singleRun: true,
    frameworks: ['mocha', 'intl-shim'],
    files: [
      'tests.bundle.js'
    ],
    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-intl-shim',
      'karma-phantomjs-launcher',
      'karma-coverage',
      'karma-mocha-reporter'
    ],
    preprocessors: {
      'tests.bundle.js': ['webpack', 'sourcemap']
    },
    reporters: ['mocha', 'coverage'],
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    },
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    }
  });
};
