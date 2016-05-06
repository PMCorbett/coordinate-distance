var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
};

const webpackPath = (directory) => (
  path.join(__dirname, '.', `src/${directory}`)
);

module.exports = {
  entry: './src/index.js',
  output: {
    path: PATHS.build,
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel',
        include: PATHS.src
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!postcss!sass?sourceMap'
      },
      {
        test: /\.css$/,
        loader: 'style!css!postcss?sourceMap'
      }
    ]
  },
  resolve: {
    root: [
      path.join(__dirname, '.', 'webpack'),
    ],
    alias: {
      components: webpackPath('components'),
      polyfills: webpackPath('polyfills'),
      services: webpackPath('services'),
      tests: webpackPath('tests'),
      translations: webpackPath('translations'),
      Translate: 'translations/components/Translate',
      injectTranslationHelpers: 'translations/injectTranslationHelpers',
      injectTranslations: 'tests/support/injectTranslations'
    }
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
  ]
};
