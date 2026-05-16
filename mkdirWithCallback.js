/**
 * 确保 fs.mkdir 的最后一个参数始终是回调函数的包装方法
 * @param {string|Buffer|URL} path - 目录路径
 * @param {Object|number} [options] - 选项参数
 * @param {Function} callback - 回调函数
 */
function mkdirWithCallback(path, options, callback) {
  const fs = require('fs');

  // 检查参数情况
  if (typeof options === 'function') {
    // 情况1: mkdir(path, callback)
    callback = options;
    options = undefined;
  } else if (callback === undefined) {
    // 情况2: mkdir(path, options) - 缺少回调函数
    throw new Error('回调函数是必需的');
  }

  // 确保最后一个参数是函数
  if (typeof callback !== 'function') {
    throw new Error('最后一个参数必须是回调函数');
  }

  // 调用原始的 fs.mkdir
  return fs.mkdir(path, options, callback);
}

// 使用示例和测试
function demo() {
  const fs = require('fs');

  console.log('=== mkdirWithCallback 使用示例 ===\n');

  // 正确用法1: 两个参数 (path, callback)
  try {
    mkdirWithCallback('/tmp/test1', (err) => {
      if (err) {
        console.log('创建目录失败:', err.message);
      } else {
        console.log('目录创建成功');
      }
    });
    console.log('✓ 两个参数调用成功');
  } catch (error) {
    console.log('✗ 两个参数调用失败:', error.message);
  }

  // 正确用法2: 三个参数 (path, options, callback)
  try {
    mkdirWithCallback('/tmp/test2', { recursive: true }, (err) => {
      if (err) {
        console.log('创建目录失败:', err.message);
      } else {
        console.log('目录创建成功');
      }
    });
    console.log('✓ 三个参数调用成功');
  } catch (error) {
    console.log('✗ 三个参数调用失败:', error.message);
  }

  // 错误用法1: 缺少回调函数
  try {
    mkdirWithCallback('/tmp/test3');
    console.log('✗ 缺少回调函数应该报错');
  } catch (error) {
    console.log('✓ 正确捕获错误:', error.message);
  }

  // 错误用法2: 最后一个参数不是函数
  try {
    mkdirWithCallback('/tmp/test4', {});
    console.log('✗ 最后一个参数不是函数应该报错');
  } catch (error) {
    console.log('✓ 正确捕获错误:', error.message);
  }
}

// 导出函数
module.exports = mkdirWithCallback;

// 如果需要测试，取消下面的注释
// demo();