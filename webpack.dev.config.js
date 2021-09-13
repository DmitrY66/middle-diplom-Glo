const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'buinld.js',
    path: path.resolve(__dirname, 'build'),
  },
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          },
        },
        exclude: /node_modules/,
      }
    ]
  }
};





