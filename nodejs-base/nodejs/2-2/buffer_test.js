// const buf = Buffer.allocUnsafe(20);
// console.log(buf);

// console.log(buf.write('buffer'));
// console.log(buf.write('buffer',5,3));
// console.log(buf);

// console.log(buf.fill('eric',5,10));

// console.log(buf.length);


// const buf = Buffer.from('test');
// console.log(buf.toString('utf8',1,3));
// console.log(buf.toJSON());


// const buf1 = Buffer.from('ABCB');
// const buf2 = Buffer.from('414243', 'hex');
// const buf3 = Buffer.from('ABCD');

// console.log(buf1);
// console.log(buf2);

// console.log(buf1.equals(buf2));
// // 打印: true
// console.log(buf1.equals(buf3));

// console.log(buf1.indexOf('B'));
// console.log(buf1.lastIndexOf('B'));

const buf = Buffer.from('abcdefghi');
const buf2 = Buffer.from('test');
// console.log(buf.slice(2,7).toString());

// console.log(buf.copy(buf2));
// console.log(buf2.toString());
console.log(buf2.copy(buf,2,1,3));
console.log(buf.toString());



