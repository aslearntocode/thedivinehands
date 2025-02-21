const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // ... other config ...
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 3001,  // Changed from 3000 to 3001
    hot: true,
    historyApiFallback: true,
    compress: true,
    client: {
      overlay: true,
    },
  },
  // ... rest of config ...
}; 