const fs = require('fs');

// fs.mkdir('/test', (err) => {
//     if (err) {
//         console.log(err); 
//     }
//     console.log('Directory created successfully!');
// });


fs.mkdir('./a/b/c', {recursive: true} ,(err) => {
    if (err) {
        console.log(err); 
    }
    console.log('Directory created successfully!');
});

// function createFunctionWithCallback(fn) {
//   // 返回一个新函数（闭包）
//   return function(firstParam, secondParam, callback) {
//     // 参数处理逻辑（通用逻辑）
//     if (typeof secondParam === 'function') {
//       callback = secondParam;
//       secondParam = undefined;
//     } else if (callback === undefined) {
//       throw new Error('最后一个参数必须是回调函数');
//     }

//     if (typeof callback !== 'function') {
//       throw new Error('最后一个参数必须是回调函数');
//     }
//     console.log(fn,111);
//     // 调用传入的具体业务函数
//     return fn(firstParam, secondParam, callback);
//   };
// }
// 创建特定功能的函数
// const myFunction = createFunctionWithCallback((first, second, callback) => {
//   console.log('第一个参数:', first);
//   console.log('第二个参数:', second);      
//    console.log('第三个参数:', callback  );           
//     // 你的业务逻辑
//   callback(null, '结果');
// });

// 使用方式
//myFunction('参数1', function(err, result) { console.log(111,err, result)});           // 两个参数
//myFunction('参数1', '参数2', function(err, result) { console.log(222,err, result  )});  // 三个参数


// function aa(fn){
//   return function(callback) {
//     debugger
//     return fn(callbck)
//   }
// }
// var bb = aa(function(callback){
//    debugger
//   callback('结果');
// });
// bb(function() { console.log(222)})///

// 读取文件夹
// fs.readdir('./a', {
//     //encoding: 'buffer',// buffer
//     withFileTypes: true
// },(err, files) => {
//     if (err) {
//         console.log(err); 
//     }
//     console.log(files); 
// });


// 删除文件夹
setTimeout(() => {
    fs.rmdir('./a', {
        recursive: true
    },(err) => {
        if (err) {
            console.log(err); 
        }           

    });
},1000)

