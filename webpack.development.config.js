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
                                localIdentName: '[path][local]-[name]',
                                minimize: false,
                                sourceMap: true,
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
        plugins: getPlugins(),
        devServer: {
            inline: true,
            hot: true,
            historyApiFallback: true,
            disableHostCheck: true,
            contentBase: 'public'
        }
    }
};

const getPlugins = () => {
    const plugins = [];

    plugins.push(new HtmlWebpackPlugin({ template: 'index.html' }));
    plugins.push(new webpack.HotModuleReplacementPlugin());
    plugins.push(new webpack.NamedModulesPlugin());

    return plugins;
};