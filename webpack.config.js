const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ({ mode }) => {
    const hash = 'contenthash';
    const isDevelopment = mode !== 'production';
    return {
        mode: mode,
        devtool: isDevelopment ? 'source-map' : 'eval-source-map',
        entry: path.resolve(__dirname, 'src', 'index.jsx'),
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
        },
        resolve: {
            extensions: ['.js', '.jsx', '.json'],
            alias: {
                '~@Pages': path.resolve(__dirname, 'src', 'pages'),
                '~@Components': path.resolve(__dirname, 'src', 'components'),
                '~@Services': path.resolve(__dirname, 'src', 'services'),
                '~@Contexts': path.resolve(__dirname, 'src', 'contexts'),
            }
        },
        plugins: [
            new ProvidePlugin({
                React: 'react'
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public', 'index.html')
            }),
            new MiniCssExtractPlugin({
                filename: isDevelopment ? '[name].bundle.css' : `static/css/_[name].[${hash}].bundle.css`,
                chunkFilename: isDevelopment ? '[name].chunk.css' : `static/css/_[name].[${hash}].chunk.css`
            })
        ],
        module: {
            rules: [
                {
                    test: /\.js[x]?$/i,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.[s]?css$/i,
                    exclude: /node_modules/,
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
