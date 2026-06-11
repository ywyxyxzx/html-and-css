const {basename,dirname,extname,join,normalize,resolve,format,parse,sep,win32} = require('path');

// console.log(basename('/nodejs/2-6/index.js','.js'))
// console.log(dirname('/nodejs/2-6/index.js'))
// console.log(extname('index.'))
// console.log(join('/nodejs/','/index.js'))
// console.log(normalize('/nodejs/test/../index.js'))
// console.log(resolve('./pathTest.js'))
// let pathObj = parse('/nodejs/test/index.js');
// console.log(pathObj)

// console.log(format(pathObj))
// console.log("当前系统下分隔符  " + sep)
// console.log("windows下分隔符  " + win32.sep)

console.log("filename  " + __filename)
// console.log(__dirname)
console.log("resolve  " + resolve('./pathTest.js'))