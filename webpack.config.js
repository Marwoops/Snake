const path = require('path');

const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: ['babel-regenerator-runtime', './src/entry.js' ],

    output: {
        path: __dirname,
        publicPath: '/',
        filename: './src/dist/entry.dist.js'
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }, {
            test: /\.css$/,
            use: ['css-loader', 'style-loader']
        }]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './public/index.dist.html'
        })
    ],

    devServer: {
        openPage: './public/index.dist.html',
    }
};