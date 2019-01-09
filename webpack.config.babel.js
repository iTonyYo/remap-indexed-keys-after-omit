'use strict';

module.exports = {
  mode: 'production',
  entry: {
    umd: './esm.js',
    'umd-sync': './esm-sync.js'
  },
  output: {
    path: __dirname,
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  externals: {
    'lodash/isEqual': {
      commonjs: 'lodash/isEqual',
      commonjs2: 'lodash/isEqual',
      amd: 'lodash/isEqual',
    },
    'lodash/map': {
      commonjs: 'lodash/map',
      commonjs2: 'lodash/map',
      amd: 'lodash/map',
    },
    'lodash/omit': {
      commonjs: 'lodash/omit',
      commonjs2: 'lodash/omit',
      amd: 'lodash/omit',
    },
    'lodash/mapKeys': {
      commonjs: 'lodash/mapKeys',
      commonjs2: 'lodash/mapKeys',
      amd: 'lodash/mapKeys',
    },
    'lodash/split': {
      commonjs: 'lodash/split',
      commonjs2: 'lodash/split',
      amd: 'lodash/split',
    },
    'lodash/findIndex': {
      commonjs: 'lodash/findIndex',
      commonjs2: 'lodash/findIndex',
      amd: 'lodash/findIndex',
    },
    'lodash/join': {
      commonjs: 'lodash/join',
      commonjs2: 'lodash/join',
      amd: 'lodash/join',
    },
    'lodash/keys': {
      commonjs: 'lodash/keys',
      commonjs2: 'lodash/keys',
      amd: 'lodash/keys',
    }
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader'
      }
    ]
  },
};
