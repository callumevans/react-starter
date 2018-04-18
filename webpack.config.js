const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
    const isProduction = (argv.mode === 'production');

    // Webpack config
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
                        { loader: 'css-loader', options: getCssLoaderOptions(isProduction) },
                        { loader: 'sass-loader' }
                    ]
                }
            ]
        },
        output: {
            path: __dirname + '/dist',
            publicPath: '/',
            filename: isProduction
                ? '[name].[hash].bundle.js'
                : '[name].bundle.js'
        },
        plugins: getPlugins(isProduction),
        devServer: {
            inline: true,
            hot: true,
            historyApiFallback: true,
            disableHostCheck: true,
            contentBase: 'public'
        }
    }
};

const getCssLoaderOptions = (isProduction) => {
    return {
        localIdentName: isProduction
            ? '[hash:base64]'
            : '[path][local]-[name]',
        minimize: isProduction,
        sourceMap: !isProduction,
        modules: true
    }
};

const getPlugins = (isProduction) => {
    const plugins = [];

    plugins.push(new HtmlWebpackPlugin({ template: 'index.html' }));

    if (!isProduction) {
        plugins.push(new webpack.HotModuleReplacementPlugin());
        plugins.push(new webpack.NamedModulesPlugin());
    }

    return plugins;
};