require('webpack');

var pkg = require('./package.json');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    singleRun: true,
    frameworks: ['mocha'],
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './node_modules/babel-core/browser-polyfill.js',
      'tests.webpack.js'
    ],
    reporters: ['dots'],
    preprocessors: {'tests.webpack.js': ['webpack']},
    webpack: {
      resolve: { extensions: ['', '.jsx', '.scss', '.js', '.json'] },
      module: {
        loaders: [
          { test: /(\.js|\.jsx)$/, exclude: /(node_modules)/, loader: 'babel' },
          { test: /(\.scss|\.css)$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!sass') },
        ]
      },
      watch: true,
      plugins: [new ExtractTextPlugin(pkg.name + '.[name].css', {allChunks: false})]
    },
    webpackServer: {
      noInfo: true
    }
  });
};
