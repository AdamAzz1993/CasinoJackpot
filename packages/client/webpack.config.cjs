const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/** @type {import('webpack').Configuration} */
var config = {
  mode: 'development',
  output: {
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      publicPath: process.env.PUBLIC_URL || '/',
    }),
  ],
  resolve: {
    alias: {
      '@api': path.resolve(__dirname, 'src/api/'),
      '@services': path.resolve(__dirname, 'src/services/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces/'),
      '@views': path.resolve(__dirname, 'src/views/'),
      '@constants': path.resolve(__dirname, 'src/constants/'),
      '@enums': path.resolve(__dirname, 'src/enums/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@modules': path.resolve(__dirname, 'src/modules/'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 8080,
    proxy: {
      '/api': 'http://localhost:4000'
    }
  }
};

module.exports = config;
