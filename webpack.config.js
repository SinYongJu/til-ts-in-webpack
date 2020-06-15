const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  // 파일 내역 입력
  entry: {
    app: "./src/index.ts"
  },
  // 파일 번들 내역 출력
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    // compress: true,
    port: 3000
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "output manage",
      filename: "index.html",
      template: "./index.html"
    })
  ]
};
