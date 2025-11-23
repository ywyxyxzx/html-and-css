const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //打包环境
    mode: 'development',
    //入口
    entry: './src/index.js',
    // 出口
    output: {
        filename: 'main.js',
        path: resolve(__dirname,'dist')
    },
    // modules:{
    //     rules:[
          
    //     ]
    // },
    plugins:[
        new HtmlWebpackPlugin()
    ],

};