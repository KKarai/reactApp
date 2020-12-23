const webpackCommon = require("./webpack.common");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  ...webpackCommon,
  mode: "development",
  devtool: "source-map",
  devServer: {
    host: "0.0.0.0",
    port: 3000,
    publicPath: "/",
    hot: true,
  },
  plugins: [...webpackCommon.plugins, new ForkTsCheckerWebpackPlugin()],
};
