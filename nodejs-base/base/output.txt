处理相对路径和 . ..

// realpath 会同时做两件事：
// 1. 解析符号链接
// 2. 规范化路径（消除 . 和 ..）

await fsp.realpath('./src/../lib/./utils.js');
// → '/absolute/path/to/lib/utils.js'
文件不存在时报错

try {
  await fsp.realpath('/not/exist');
} catch (e) {
  console.log(e.code);  // 'ENOENT'
}
realpath vs resolve

const path = require('path');

// path.resolve：纯字符串拼接，不访问文件系统
path.resolve('/link', 'file.txt');
// → '/link/file.txt'（不知道 link 是符号链接）

// fs.realpath：实际访问文件系统，解析符号链接
await fsp.realpath('/link/file.txt');
// → '/actual/path/file.txt'（真正读取了文件系统）
典型使用场景

// 1. 判断两个路径是否指向同一个文件
async function isSameFile(a, b) {
  const realA = await fsp.realpath(a);
  const realB = await fsp.realpath(b);
  return realA === realB;
}

// 2. node_modules 中解析包的真实位置
const pkgPath = await fsp.realpath('node_modules/lodash');
// → '/project/node_modules/.pnpm/lodash@4.17.21/node_modules/lodash'

// 3. 安全检查（防止符号链接攻击）
async function safeRead(userInputPath) {
  const real = await fsp.realpath(userInputPath);
  if (!real.startsWith('/allowed/dir')) {
    throw new Error('禁止访问该路径');
  }
  return fsp.readFile(real, 'utf-8');
}
一句话总结
realpath = 访问真实文件系统，把路径中的符号链接替换成它指向的真实路径，同时规范化 . ..。