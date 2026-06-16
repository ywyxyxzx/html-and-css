const path = require('path');
// console.log(path.sep); // 输出路径分隔符
// console.log(path.delimiter);    // 输出环境变量分隔符
// console.log(path.dirname('/foo/bar/baz/asdf/quux')); // 输出路径的目录部分
// console.log(path.extname('index.html')); // 输出路径的扩展名
// console.log(path.basename('/foo/bar/baz/asdf/quux.html'));  // 输出路径的最后一部分
// console.log(path.basename('/foo/bar/baz/asdf/quux.html', '.html')); // 输出路径的最后一部分，去掉扩展名
// console.log(path.parse('/foo/bar/baz/asdf/quux.html')); // 输出路径的对象
console.log(path.format({
    root: '/',  

    dir: '/foo/bar/baz/asdf',

    base: 'quux.html'
}));    // 输出路径字符串
// console.log(path.isAbsolute('/foo/bar'));
// console.log(path.join('nodejs','index.js')); // 输出路径字符串，规范化路径
// console.log(path.normalize('/nodejs//index.js')); // 输出规范化的路径
// console.log(path.resolve('/output.txt')); // 输出规范化的路径

console.log(__filename); // 输出当前模块的文件名
console.log(__dirname);  // 输出当前模块的目录名