const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist/assets'),
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map',
  },
  mode: 'development',
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node-modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [
            [
              '@babel/plugin-proposal-class-properties',
            ],
          ],
        },
      },
    ],
  },
};
