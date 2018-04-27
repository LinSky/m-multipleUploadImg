var path =require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'index.js',
        publicPath: '/'
    },
    devServer: {
      clientLogLevel: 'warning',
      hot: true,
      contentBase: '/dist', // since we use CopyWebpackPlugin.
      compress: false,
      host: 'localhost',
      port: '8080',
      overlay: { warnings: false, errors: true },
      publicPath: '/',
      proxy: {},
      quiet: false, // necessary for FriendlyErrorsPlugin
      watchOptions: {
        poll: false,
      }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'm-multipleUploadImg',
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ]
}
