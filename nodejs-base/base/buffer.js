// console.log(Buffer.alloc(10)); // Buffer (length, fill)
// console.log(Buffer.alloc(10,2)); 
// console.log(Buffer.alloc(10,100)); // 100 16进制 64 fill 最大255
// console.log(Buffer.alloc(10,256));
// console.log(Buffer.alloc(10,-1));

// const buf = Buffer.alloc(10);
// buf[9] = 1;
// console.log(buf)

// console.log(Buffer.alloc(10, 'eric'));
// console.log(Buffer.alloc(10, 'eric', 'base64'));

// console.log(Buffer.from([1,2,3,4]));
// console.log(Buffer.from([1,2,3,4], 'base64'));
// console.log(Buffer.from('efic'));
// console.log(Buffer.from('efic', 'base64'));

// console.log(Buffer.byteLength('中文'))
// console.log(Buffer.isBuffer('中文'))
// console.log(Buffer.isBuffer(Buffer.from([1,2,3,4])))
// console.log(Buffer.concat([Buffer.from('hello'), Buffer.from('world')]))
// console.log(Buffer.concat([Buffer.from('hello'), Buffer.from('world')],3)) // totallength

// 写入
const buf= Buffer.allocUnsafe(20);
console.log(buf)

console.log(buf.write('buffer',5, 3, 'utf8')) // 写入buff，返回长度, 从第5个开始写入，写入3个字节
console.log(buf)
console.log(buf.length) 
console.log(buf.toString())
const buf2 = Buffer.allocUnsafe(20);
console.log(buf2.fill('buffer',5, 'utf8')) // 返回填充后的buff， 填满
console.log(buf2.length) 
console.log(buf2.toString())