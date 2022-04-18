const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
    entry: './index.js',
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' }
        ]
    },
    output: {
        filename: 'index_bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'final',
            template: path.resolve(__dirname, 'index.html'),
            filename: 'index.html',
        }),
        new CopyPlugin({
            patterns: [
                {from: "wam", to: "wam"},
                {from: "refrigirator", to: "refrigirator"},
                {from: "bombcountdown", to: "bombcountdown"},
                {from: "artStation", to: "artStation"},
                {from: "images", to: "images"},
                {from: "index.css", to: "index.css"}
            ]
        })
    ]
}