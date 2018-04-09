const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const { CheckerPlugin } = require('awesome-typescript-loader');

const config = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.[hash].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.txt$/,
                use: 'raw-loader',
            },
            {
                test: /\.tsx?$/,
                use: 'awesome-typescript-loader',
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
        // ...
    },
};

module.exports = config;