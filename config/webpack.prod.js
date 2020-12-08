const webpackCommon = require('./webpack.common');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

const analyzerMode = process.env.ANALYZE ? 'static' : 'disabled';

module.exports = {
    ...webpackCommon,
    mode: 'production',
    // optimization: {
    //     minimizer: [
    //         new TerserJSPlugin({
    //             parallel: true
    //         })
    //     ]
    // },
    plugins: [
        ...webpackCommon.plugins,
        // new CompressionPlugin({
        //     exclude: ['index.html']
        // }),
        new BundleAnalyzerPlugin({
            analyzerMode
        })
    ]
};