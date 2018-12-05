var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    resolve:{
        extensions: ['.js', '.ts']
    },
    devtool: 'inline-source-map',
    entry: {
        app: [
            './src/js/01ArrayOperations.js',
            './src/js/02Concat.js',
            './src/js/03CloneMerge.js',
            './src/ts/04ReadBooks.ts',
            './src/js/05SlotMachine.js',
        ],
        vendor: [
            '@babel/polyfill',
        ]
    },
    output: {
        filename: '[name].[chunkhash].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader',
                options: {
                    useBabel: true,
                    "babelCore": "@babel/core",
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }
        ]
    },
    plugins:
    [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
        })
    ]
}