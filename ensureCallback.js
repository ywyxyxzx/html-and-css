/**
 * 通用函数：确保最后一个参数是回调函数
 * @param {any} firstParam - 第一个参数
 * @param {any} [secondParam] - 可选的第二个参数
 * @param {Function} callback - 必须是最后一个参数的回调函数
 * @returns {any} 函数的返回值
 */
function ensureCallback(firstParam, secondParam, callback) {
  // 参数处理逻辑
  if (typeof secondParam === 'function') {
    // 情况1: 只传了两个参数，第二个参数是回调函数
    // ensureCallback(firstParam, callback)
    callback = secondParam;
    secondParam = undefined; // 或默认值
  } else if (callback === undefined) {
    // 情况2: 传了三个参数，但第三个参数未定义或不是函数
    throw new Error('最后一个参数必须是回调函数');
  }

  // 验证最后一个参数确实是函数
  if (typeof callback !== 'function') {
    throw new Error('最后一个参数必须是回调函数');
  }

  // 这里放置你的实际业务逻辑
  console.log('第一个参数:', firstParam);
  console.log('第二个参数:', secondParam);
  console.log('回调函数:', typeof callback);

  // 模拟异步操作
  setTimeout(() => {
    try {
      // 业务逻辑处理
      const result = `处理完成: ${firstParam}`;

      // 调用回调函数，第一个参数是错误（如果有），第二个是结果
      callback(null, result);
    } catch (error) {
      // 如果有错误，传递给回调
      callback(error);
    }
  }, 100);

  // 可以返回一些值，或者不返回
  return '函数已调用';
}

// 使用示例
console.log('=== ensureCallback 使用示例 ===\n');

// 正确用法1: 传两个参数 (firstParam, callback)
console.log('测试1: 两个参数');
const result1 = ensureCallback('参数1', (err, data) => {
  if (err) {
    console.log('错误:', err.message);
  } else {
    console.log('成功:', data);
  }
});
console.log('返回值:', result1);

console.log('\n测试2: 三个参数');
// 正确用法2: 传三个参数 (firstParam, secondParam, callback)
const result2 = ensureCallback('参数1', '参数2', (err, data) => {
  if (err) {
    console.log('错误:', err.message);
  } else {
    console.log('成功:', data);
  }
});
console.log('返回值:', result2);

console.log('\n测试3: 错误情况 - 缺少回调函数');
try {
  ensureCallback('参数1', '参数2'); // 缺少回调函数
} catch (error) {
  console.log('捕获到预期错误:', error.message);
}

console.log('\n测试4: 错误情况 - 最后一个参数不是函数');
try {
  ensureCallback('参数1', '参数2', '不是函数'); // 最后一个参数不是函数
} catch (error) {
  console.log('捕获到预期错误:', error.message);
}

// 通用工具函数版本
function createFunctionWithCallback(fn) {
  return function(firstParam, secondParam, callback) {
    // 参数处理逻辑
    if (typeof secondParam === 'function') {
      callback = secondParam;
      secondParam = undefined;
    } else if (callback === undefined) {
      throw new Error('最后一个参数必须是回调函数');
    }

    if (typeof callback !== 'function') {
      throw new Error('最后一个参数必须是回调函数');
    }

    // 调用原始函数
    return fn(firstParam, secondParam, callback);
  };
}

// 示例：创建一个具体的函数
const mySpecificFunction = createFunctionWithCallback((first, second, cb) => {
  console.log('执行特定函数逻辑');
  console.log('第一个参数:', first);
  console.log('第二个参数:', second);

  setTimeout(() => {
    cb(null, `处理结果: ${first} + ${second || '无'}`);
  }, 50);
});

console.log('\n=== 使用通用工具函数创建的具体函数 ===');
mySpecificFunction('测试', (err, result) => {
  console.log('两个参数调用结果:', result);
});

mySpecificFunction('测试1', '测试2', (err, result) => {
  console.log('三个参数调用结果:', result);
});

// 导出函数供其他模块使用
module.exports = {
  ensureCallback,
  createFunctionWithCallback
};