const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',

  devServer:{
    static: path.resolve(__dirname, './public'),
    port: 3000,
    host: 'localhost'
  },

  module: {
    rules: [
      // Kiwi Schemas
      // https://github.com/evanw/kiwi
      {
        test: /\.kiwi$/,
        exclude: /node_modules/,
        use: [
          'raw-loader',
        ]
      },
    ],
  },
  resolve: {
    extensions: [ '.js' ],
    fallback: {
      "util": require.resolve("util/"),
      "stream": require.resolve("stream-browserify"),
    },
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../build'),
  },

  plugins:[
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, './public/index.html'),
    }),

    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process'
    })
  ],
};
