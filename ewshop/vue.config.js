const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
   configureWebpack:{
    resolve:{
      alias:{
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views',
        'store': '@/store',
        'network': '@/network',
        'utils': '@/utils',
      }
    },
    devtool: 'source-map'
  },
  publicPath: '/',
  lintOnSave: false,

})
// module.exports = {
 
// }