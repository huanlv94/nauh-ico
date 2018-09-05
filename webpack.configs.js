const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build_webpack'),
    filename: 'app.js'
  },
  plugins: [
  ],
  module: {
    rules: [
      {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2016'],
          plugins: ['transform-runtime']
        }
      }
    ]
  }
}
