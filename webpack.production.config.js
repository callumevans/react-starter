const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
    return {
        entry: {
            main: [
                'react-hot-loader/babel',
                './src/main.js'
            ]
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                },
                {
                    test: /\.(css|scss)$/,
                    use: [
                        { loader: 'style-loader' },
                        { loader: 'css-loader',
                            options: {
                                localIdentName: '[name].[hash].bundle.js',
                                minimize: true,
                                sourceMap: false,
                                modules: true
                            }
                        },
                        { loader: 'sass-loader' }
                    ]
                }
            ]
        },
        output: {
            path: __dirname + '/dist',
            publicPath: '/',
            filename: '[name].bundle.js'
        },
        plugins: getPlugins()
    }
};

const getPlugins = () => {
    const plugins = [];

    plugins.push(new HtmlWebpackPlugin({ template: 'index.html' }));

    return plugins;
};