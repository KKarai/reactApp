const webpackCommon = require("./webpack.common");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const TerserJSPlugin = require("terser-webpack-plugin");

const analyzerMode = process.env.ANALYZE ? "static" : "disabled";

module.exports = {
  ...webpackCommon,
  mode: analyzerMode === "static" ? "development" : "production",
  optimization: {
    minimize: true,
    minimizer: [
      new TerserJSPlugin({
        parallel: true,
        extractComments: false,
        terserOptions: {
          format: {
            comments: false,
          },
        },
      }),
    ],
  },
  plugins: [
    ...webpackCommon.plugins,
    new BundleAnalyzerPlugin({
      analyzerMode,
    }),
  ],
};
