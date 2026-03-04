module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
     'postcss-pxtorem': {
      rootValue: 16, // 根元素字体大小 (1rem = 16px)
      propList: ['*'], // 需要转换的属性，*代表全部
      selectorBlackList: ['.norem'], // 过滤掉.norem开头的class
    }
  },
}
