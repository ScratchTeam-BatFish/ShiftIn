const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: "development",
  entry: './index.html',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
      filename: 'index.html',
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'src'),
      publicPath: '/'
    },
    hot: true,
    proxy: {
      '/src': 'http:localhost:3000'
    }
  }
};

module.exports = config;