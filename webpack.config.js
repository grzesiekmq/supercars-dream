const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './www/src/main.js',
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.vue$/, use: 'vue-loader' },
      { test: /\.css$/, use: ['vue-style-loader', 'css-loader']},
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './www/index.html',
    }),
    new VueLoaderPlugin()
    

  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
        }
  }
  

};