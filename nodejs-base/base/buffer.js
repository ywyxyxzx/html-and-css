// 18074 // 原始天皇巨星 s2底盘
// 18625 //天皇巨星，不考虑太丑 
// 18628 // 燃烧太阳
// 18630 // 冲刺流星
// 18632 // 超级天皇巨星
// 创建buffer
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

// 写入
// const buf= Buffer.allocUnsafe(20);
// console.log(buf)
// console.log('---------------------------------------------')
// console.log(buf.write('buffer',5, 3, 'utf8')) // 写入buff，返回长度, 从第5个开始写入，写入3个字节
// console.log(buf)
// console.log(buf.length) 
// console.log(buf.toString())
// console.log('---------------------------------------------')
// const buf2 = Buffer.allocUnsafe(20);
// console.log(buf2.fill('buffer',5, 'utf8')) // 返回填充后的buff， 填满
// console.log(buf2.length) 
// console.log(buf2.toString())
// console.log(buf2.toJSON())


// hex
// console.log('---------------------------------------------')
// const buf1 = Buffer.from('ABC');
// const buf2 = Buffer.from('414243', 'hex'); // hex解码
// const buf3 = Buffer.from('ABCD');
// console.log(buf1);
// console.log(buf2);
// console.log(buf1.equals(buf2));
// // 打印: true
// console.log(buf1.equals(buf3));


// 查找指定值
// console.log('---------------------------------------------')
const buf1 = Buffer.from('ABC');
console.log(buf1.indexOf('B')) // 1