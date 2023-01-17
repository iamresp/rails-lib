const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const ESLintPlugin = require('eslint-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const TerserPlugin = require('terser-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    stats: 'errors-warnings',
    entry: './src/index.tsx',
    devtool: isProduction
        ? undefined
        : 'source-map',
    mode: 'production',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },
    optimization: {
        usedExports: true,
    },
    devServer: {
        client: {
            overlay: false,
        },
        hot: true,
        historyApiFallback: true,
        port: 3000,
    },
    performance: {
        hints: false,
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            '@babel/preset-typescript',
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties',
                            '@babel/plugin-transform-classes',
                            '@babel/plugin-transform-runtime',
                        ],
                    },
                },
                include: [
                    path.resolve('src'),
                ],

            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico',
        }),
        new CleanWebpackPlugin(),
        !isProduction && new ESLintPlugin({
            extensions: ['ts', 'tsx'],
        }),
    ].filter(Boolean),
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: isProduction
            ? 'rails-common-lib.min.js'
            : 'rails-common-lib.js',
    },
    optimization: {
        minimize: isProduction,
        minimizer: [
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    mangle: {
                        keep_fnames: true,
                    },
                    output: {
                        comments: false,
                    },
                },
            }),
        ],
        usedExports: true,
    },
};
