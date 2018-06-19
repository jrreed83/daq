const webpack    = require('webpack');
const path       = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'app/index.js'),
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'] 
            }
        ]
    },

    plugins: [
        new HtmlPlugin({
            template: path.resolve(__dirname, 'app/index.html'),
        }),
    ]
}