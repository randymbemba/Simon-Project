const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    minimize : true
                }
            },
    {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name:"[name].[exit]",
                    outputPath: "images",
                }
            },
        ],
    },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],

            },
            {

                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
],
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './src/index.html'),
        filename: "index.html",
    }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        })
    ],
    mode: 'development'
};