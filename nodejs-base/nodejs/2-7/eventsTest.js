const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}

let myEmitter = new MyEmitter();

function fn1(a,b){
    console.log('触发了事件，带参 ',a+b)
}

function fn2(){
  console.log("触发了事件，不带参")
}

myEmitter.on('hi',fn1)

myEmitter.on('hi',fn2)

myEmitter.once('hello',()=>{
  console.log('触发了hello事件')
})

myEmitter.emit('hi',1,8);
// myEmitter.emit('hello')
// myEmitter.emit('hello')

// myEmitter.removeListener('hi',fn1)
myEmitter.removeAllListeners('hi');
myEmitter.emit('hi',1,8);
