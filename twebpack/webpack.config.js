const path = require('path');
module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public/dist'),
    publicPath: '/dist/'
  },
  module: {
    rules: [
    //   { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    //   { test: /\.js$/, exclude: /node_modules/, loader: "eslint-loader" },
      { test: /\.tsx?$/, exclude: /node_modules/, loader: "ts-loader" }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
};