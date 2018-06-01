const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const LessPluginCleanCss = require('less-plugin-clean-css');

module.exports = {
    entry: './App.js',
    context: path.join(__dirname, './../preview'),
    output: {
        path: path.join(__dirname, './../preview'),
        filename: 'bundle.js'
    },
    mode: 'development',
    devServer: {
        contentBase: './index.html',
        historyApiFallback: true,
        hot: true,
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }, {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    {
                        loader:
                        'less-loader',
                        // options: {
                        //     plugins: [
                        //         new LessPluginCleanCss({
                        //             advanced: true,
                        //         }),
                        //     ],
                        // },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
