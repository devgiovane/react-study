const path = require('path');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const DotenvPlugin = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ({ mode }) => {
    const hash = 'contenthash';
    const isDevelopment = mode !== 'production';
    return {
        mode: mode,
        target: isDevelopment ? 'web' : 'browserslist',
        devtool: isDevelopment ? 'source-map' : 'eval-source-map',
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: isDevelopment ? '[name].bundle.js' : `static/js/_[name].[${hash}].bundle.js`,
            chunkFilename: isDevelopment ? '[name].chunk.js' : `static/js/_[name].[${hash}].chunk.js`
        },
        devServer: {
            port: 9000,
            hot: true,
            open: true,
            allowedHosts: 'all',
            client: {
                reconnect: 5
            }
        },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
            alias: {
                '~@Adapters': path.resolve(__dirname, 'src', 'adapters'),
                '~@Assets': path.resolve(__dirname, 'src', 'assets'),
                '~@Components': path.resolve(__dirname, 'src', 'components'),
                '~@Contexts': path.resolve(__dirname, 'src', 'contexts'),
                '~@Pages': path.resolve(__dirname, 'src', 'pages'),
                '~@Services': path.resolve(__dirname, 'src', 'services'),
            }
        },
        plugins: [
            new DotenvPlugin({
               safe: true
            }),
            new ProvidePlugin({
                React: 'react'
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public', 'index.html'),
                favicon: path.resolve(__dirname, 'public', 'favicon.png')
            }),
            new MiniCssExtractPlugin({
                filename: isDevelopment ? '[name].bundle.css' : `static/css/_[name].[${hash}].bundle.css`,
                chunkFilename: isDevelopment ? '[name].chunk.css' : `static/css/_[name].[${hash}].chunk.css`
            })
        ],
        module: {
            rules: [
                {
                    test: /\.(js|jsx|ts|tsx)$/i,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.css$/i,
                    use: [
                        {
                            loader: isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    auto: path => path.endsWith(".module.css"),
                                    localIdentName: '_[name]__[local]--[hash:base64:12]'
                                }
                            }
                        },
                        {
                            loader: "postcss-loader"
                        }
                    ]
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'static/assets/images/[hash][ext][query]'
                    }
                },
                {
                    test: /\.(woff|woff2|ttf|eot)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'static/assets/font/[hash][ext][query]'
                    }
                }
            ]
        }
    }
}
