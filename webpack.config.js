const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    //entry file
    entry: ['@babel/polyfill', './src/js/main.js', './src/sass/main.scss'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/style.css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src/js')
                ],
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // "style-loader", // creates style nodes from JS strings
                    "css-loader",   // translates CSS into CommonJS
                    "sass-loader",  // compiles Sass to CSS, using Node sass by default
                ],
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'source-map',
    mode: 'development'
};