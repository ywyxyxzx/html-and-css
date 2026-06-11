const util = require('util');
const fs = require('fs');
// async function hello(){
//   return 'hello world'
// }

// let helloCb = util.callbackify(hello);

// helloCb((err,res) => {
//   if(err) throw err;
//   console.log(res)
// })

let stat = util.promisify(fs.stat)

// stat('./utilTest.js').then((data) => {
//   console.log(data)
// }).catch((err) => {
//   console.log(err)
// })

async function statFn () {
  try {
    let stats = await stat('./utilTest.js');
    console.log(stats)
  } catch (e) {
    console.log(e)
  }
}

// statFn();

console.log(util.types.isDate(new Date()))

