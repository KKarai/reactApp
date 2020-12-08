const webpackCommon = require('./webpack.common');

module.exports = {
    ...webpackCommon,
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        host: '0.0.0.0',
        port: 3000,
        publicPath: '/',
        hot: true
    }
};