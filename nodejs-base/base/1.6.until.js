let util = require('util');
let fs = require('fs');

async function hello(filePath) {
    return 'hello world';
}
let helloCb = util.callbackify(hello); // 将一个返回 Promise 的函数转换为一个使用回调函数的函数

// helloCb((err, result) => {
//     if (err) {
//         console.error(err); 
//     }
//     console.log(result); 
// });

let stat = util.promisify(fs.stat); // 将一个使用回调函数的函数转换为一个返回 Promise 的函数

// stat('./1.5.event.js').then(data => {
//     console.log(data);
// }).catch(err => {
//     console.error(err);
// });

// async function main() {
//     try {
//         let data = await stat('./1.5.event.js');
//         console.log(11111111, data);
//     } catch (err) {
//         console.error(err);
//     }
// }
// main();

// 6. util.types — 类型检查

// console.log(util.types.isDate(new Date())); // 判断是否是日期对象
// console.log(util.types.isRegExp(/abc/)); // 判断是否是正则表达式对象    
// console.log(util.types.isPromise(Promise.resolve())); // 判断是否是 Promise 对象
// console.log(util.types.isMap(new Map()));         // 判断是否是 Map 对象
// console.log(util.types.isSet(new Set()));        // 判断是否是 Set 对象
// console.log(util.types.isTypedArray(new Uint8Array())); // 判断是否是 TypedArray 对象
// console.log(util.types.isArrayBuffer(new ArrayBuffer()))    ; // 判断是否是 ArrayBuffer 对象
// 3. util.inspect(obj)
// 将任意对象转为可读的字符串（调试利器）：
// const obj = { name: 'Alice', nested: { age: 25, hobbies: ['reading'] } };
// console.log(util.inspect(obj, { depth: null, colors: true }));
// { name: 'Alice', nested: { age: 25, hobbies: [ 'reading' ] } }

///4. util.format(fmt, ...args)
//类似 C 语言的 printf 格式化字符串：
// console.log(util.format('%s:%s', 'host', 8080));  // 'host:8080'
// console.log(util.format('%d + %d = %d', 1, 2, 3)); // '1 + 2 = 3'
// console.log(util.format('%j', { a: 1 }));          // '{"a":1}'  (JSON)
// console.log(util.format('%o', { a: 1 }))        ;          // "{ a: 1 }" (inspect)


// 5. util.inherits(constructor, superConstructor)
// 原型链继承（老式写法，现代代码推荐 class extends）：


// function Animal(name) { this.name = name; }
// Animal.prototype.speak = function () { console.log(`${this.name} makes a sound`); };

// function Dog(name) { 
//     Animal.call(this, name);   // call 借用构造函数 —— 继承属性 
// }
// util.inherits(Dog, Animal); // util.inherits —— 继承方法
// // Dog.prototype = Object.create(Animal.prototype);
// //Dog.prototype.constructor = Dog;
// console.log(Dog.prototype.constructor); // true
// const d = new Dog('Rex');
// d.speak(); // 'Rex makes a sound'