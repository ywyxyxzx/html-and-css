module.exports = {
  name: 'page-generator',
  description: '生成uni-app页面',
  usage: '/page-generator <name> <title>',

  execute: async function(args, workingDirectory) {
    if (args.length < 2) {
      return {
        success: false,
        message: '需要页面名称和标题: /page-generator <name> <title>'
      };
    }

    const pageName = args[0];
    const pageTitle = args[1];

    return {
      success: true,
      message: `将创建页面: ${pageName} - ${pageTitle}\n工作目录: ${workingDirectory}`
    };
  }
};