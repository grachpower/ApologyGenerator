const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const { CheckerPlugin } = require('awesome-typescript-loader');

const config = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.[hash].bundle.js',
    },
    resolve: {
        extensions: [' ', '.html', '.ts', '.js', 'scss'],
    },
    module: {
        rules: [
            {
                test: /\.txt$/,
                use: 'raw-loader',
            },
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'}),

        new CheckerPlugin(),
    ],

    devServer: {
        contentBase: path.join(__dirname, 'dist'), // boolean | string | array, static file location
        port: 3000,
        compress: true, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        https: false, // true for self-signed, object for cert authority
        noInfo: true, // only errors & warns on hot reload
        hot: true,
        inline: true,
        // ...
    },
};

module.exports = config;