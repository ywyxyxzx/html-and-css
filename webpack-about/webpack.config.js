const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const EslintPlugin = require('eslint-webpack-plugin');


module.exports = (env) => {

    //打包环境
    let config = {
        mode: 'development',
        //入口
        entry: './src/index.js',
        // 出口
        output: {
            filename: 'main.js',
            path: resolve(__dirname, 'dist')
        },
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
                },
                {
                    test: /\.less$/i,
                    use: [MiniCssExtractPlugin.loader, 'css-loader', "less-loader", 'postcss-loader']
                },
                {
                    test: /\.m?js$/i,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                            ]
                        }
                    }
                },
                {
                    test: /\.(png|jpe?g|gif|webp)$/i,
                    type: 'asset',
                    parser: {
                        dataUrlCondition: {
                            maxSize: 10 * 1024,
                        }
                    },
                    generator: {
                        filename: 'images/[name]_[hash:8][ext]'
                    },

                },
                {
                    test: /\.(html)$/,
                    // 处理html文件的img图片 （负责引入img， 从而被url打包处理）
                    loader: 'html-withimg-loader',
                    generator: {
                        filename: 'images/[name][ext]'
                    },

                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: 'index.html',
                title: 'index',
            }),
            new HtmlWebpackPlugin({
                template: './src/main.html',
                filename: 'main.html',
                title: 'main'
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
        devServer: {
            static: {
                directory: resolve(__dirname, 'dist'),

            },
            liveReload: true,
            compress: true,
            port: 8182,
            proxy: [{
                context: ['/api'],
                target: "http://api.xdclass.net",
                pathRewrite: {
                    "/api": ""
                },
                secure: false,// https / http
                changeOrigin: true // 覆盖主机名

            },

            ]
        }

    }
    if (env.production) {
        config.mode = 'production';
        config.plugins = [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: 'index.html',
                title: 'index',
                minify: {
                    collapseWhitespace: true, // 压缩空格,换行
                    removeComments: true, // 清除注释
                }
            }),
            new HtmlWebpackPlugin({
                template: './src/main.html',
                filename: 'main.html',
                title: 'main'
            }),
            new OptimizeCssAssetsWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: './css/main.css'
            }),
            new EslintPlugin({
                exclude: 'node_modules',
                fix: true,
                //   cache:true,
            })
        ];
    }
    return config;
};