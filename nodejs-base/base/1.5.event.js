const eventEmitter = require('events');

class MyEmitter extends eventEmitter {} 
const myEmitter = new MyEmitter();
const fn1 = (a,b) => {
  console.log('hi event occurred!', a+b);
}
const fn2 = (a,b) => {
  console.log('hi event occurred again!', a*b);
}
myEmitter.on('hi', fn1);
myEmitter.on('hi', fn2);
myEmitter.removeListener('hi', fn1);
myEmitter.removeAllListeners('hi');
myEmitter.emit('hi', 1,8);
