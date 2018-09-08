const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin")

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/templates/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build_webpack"),
    filename: "app.js"
  },
  plugins: [htmlPlugin],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.json$/,
        type: "javascript/auto",
        use: [require.resolve("json-loader")]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader"
      }
    ]
  }
};
