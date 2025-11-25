const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const EslintPlugin = require('eslint-webpack-plugin');
const webpack = require('webpack');
const {merge} = require('webpack-merge');
const baseWecbpackConfig = require("./webpack.base.config");
const devWebpackConfig = merge(baseWecbpackConfig,{
    mode: 'development',
     plugins: [
        new webpack.DefinePlugin({
           API_BASE_URL: JSON.stringify('https://apidev.xdclass.com')
        }),
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: 'index.html',
                title: 'index',
                chunks: ['index'],
                minify: {
                    collapseWhitespace: true, // 压缩空格,换行
                    removeComments: true, // 清除注释
                }
            }),
            new HtmlWebpackPlugin({
                template: './src/main.html',
                filename: 'main.html',
                title: 'main',
                chunks: ['mine'],
            }),
            new MiniCssExtractPlugin({
                filename: './css/main.css'
            }),
            new EslintPlugin({
                exclude: 'node_modules',
                fix: true,
                //   cache:true,
            })
        ],
})
module.exports = devWebpackConfig;