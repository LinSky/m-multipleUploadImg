var path =require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

module.exports = {
    entry: __dirname + "/src/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "index.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'm-multipleUploadImg',
            filename: 'index.html',
            template: 'index.html',
        })
    ]
}
