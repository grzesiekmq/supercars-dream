const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './www/src/main.js',
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.vue$/, use: 'vue-loader' },
      { test: /\.css$/, use: ['vue-style-loader', 'css-loader'] },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './www/index.html',
    }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin()


  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  output: {
    path: path.resolve(__dirname, 'dist')

    






  }


};