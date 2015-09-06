'use strict'

pkg               = require './package.json'
node_modules      = __dirname + '/node_modules'
ExtractTextPlugin = require('extract-text-webpack-plugin')
environment       = process.env.NODE_ENV

module.exports =
  cache         : true
  resolve       : extensions: ['', '.jsx', '.cjsx', '.coffee', '.js', '.json', '.styl']
  context       : __dirname

  entry:
    commons     : ['./components/commons.styl']
    test        : ['webpack/hot/dev-server', './spec/index.cjsx']
    # test        : ['webpack/hot/dev-server', './spec/index.cjsx']

  output:
    path        : if environment is 'production' then './dist' else './build'
    filename    : pkg.name + '.[name].js'
    publicPath  : '/build/'

  devServer:
    # contentBase : './build'
    host        : '0.0.0.0'
    port        : 8080
    # colors      : true
    # progress    : true
    # noInfo      : false
    # hot         : true
    inline      : true

  module:
    noParse     : [node_modules + '/react/dist/*.js']

    loaders: [
      test      : /(\.js|\.jsx)$/,      exclude:/(node_modules)/, loader: 'babel?optional=runtime'
    ,
      test      : /\.cjsx$/,    loader: 'coffee-jsx-loader'
    ,
      test      : /\.coffee$/,  loader: 'coffee-jsx-loader'
    ,
      test      : /\.styl$/,    loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!stylus-loader!')
    ]

  postcss: [
    require('autoprefixer-core')
  ],

  plugins: [
    new ExtractTextPlugin pkg.name + '.[name].css', allChunks: false
  ]
