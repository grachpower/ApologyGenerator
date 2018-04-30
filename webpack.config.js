const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const { CheckerPlugin } = require('awesome-typescript-loader');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const WebpackPwaManifest = require('webpack-pwa-manifest')

const config = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, ''),
        filename: 'main.bundle.js',
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
                loader: 'ts-loader',
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

        new DefinePlugin({
            'SW_CACHE': `SW_CACHE_${new Date().toDateString()}`,
        }),

        new CheckerPlugin(),

        new WebpackPwaManifest({
            name: 'Apologiser 5000',
            short_name: 'Apologiser',
            description: 'Simple way to generate 1000 different apologies',
            background_color: '#ffffff',
            orientation: "portrait",
            display: "standalone",
            icons: [
                {
                    src: path.resolve('src/assets/icon.png'),
                    sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
                },
                {
                    src: path.resolve('src/assets/large-icon.png'),
                    size: '1024x1024' // you can also use the specifications pattern
                }
            ]
        })
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