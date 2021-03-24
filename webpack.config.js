const path = require('path');
var sass = require('sass');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    module: {
        rules: [
          { test: /\.css$/, use: [MiniCssExtractPlugin.loader,'css-loader'] },
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
          { test: /\.ts$/, use: 'ts-loader' },
          { test: /\.vue$/, use: 'vue-loader' },
          {
            test: /\.(svg|gif|png|eot|woff|ttf)$/,
            use: [
              'url-loader',
            ],
          },
        ],
      },
    mode: 'development',
    entry: ['./src/index.js', './src/index.scss'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js.js',
      },
      plugins: [new MiniCssExtractPlugin(), new VueLoaderPlugin() ],
      resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve('src'),
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
  };
  