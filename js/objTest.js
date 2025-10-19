//"use strict"
function User(name, age) {
    this.name = name;
    this.age = age;
    this.show = function () {
        console.log(this, this.name)
    }
}

let user = new User('Vasya', 18);
// user.show();
let func = user.show;
//func()/

// 定义属性描述符
//console.log(1111, Object.hasOwnProperty.call(user, 'name'))
//console.log(1111, user.hasOwnProperty('name'))

// console.log(JSON.stringify(Object.getOwnPropertyDescriptor(user, "name")))

// Object.defineProperties(
//     user, 
    
//     {
//         name: {
//             writable: false,  // modify
//               enumerable: false, // enumerate
//               configurable: false // delete
//         },
//         age: {
//             writable: false, enumerable: false, configurable: false
//         }
//     }
    
// )
// user.name = "Petya"
// console.log(user.name)



// 添加属性
// Object.preventExtensions(user);
// if(Object.isExtensible(user)) {
//     user.site = "https://www.baidu.com";
//     console.log(user.site)
// }

// 封闭API 
// Object.seal(user);
// 不能添加属性，不能删除属性，不能修改属性描述符
// console.log(JSON.stringify(Object.getOwnPropertyDescriptors(user)))
// if(!Object.isSealed(user)) {
//     user.site = "https://www.baidu.com";
//     delete user.name;
//     console.log(JSON.stringify(user))
// }

// 冻结对象 // 不能添加属性，不能删除属性，不能修改属性，不能修改属性描述符
// Object.freeze(user);
// console.log(JSON.stringify(Object.getOwnPropertyDescriptors(user)))
// Object.isFrozen(user) ? console.log('冻结') : console.log('没有冻结')

// 访问器
let user1 = {
    data: {
        name: 'Vasya',
        age: 18
    },
    set age(value) {
        if(typeof value !== 'number' || value < 0 || value > 120) {
            throw new Error('Invalid age');
        };
        this.data.age = value;
    },
    get age () {
        return this.data.age;
    }
}
 user1.age = 12;
// console.log(user1)

// 伪造属性
let lesson = {
    lists: [
        {
            name: 'math',
            price: '100'
        },
        {
            name: 'english',
            price: '200'
        },
        {
            name: 'physics',
            price: '300'
        }
    ],
    get total(){
        return this.lists.reduce((total, item) => total + parseInt(item.price), 0)
    }
}
//console.log(lesson)

// 设置属性
const web= {
    name: 'Vasya',
    url: "www.baidu.com",
    
    set site(value) {
        [this.name, this.url] = value.split(',');
    },
    get site() {
        return `${this.name} of site is ${this.url}`;
    }
}
web.site = 'Petya,www.baidu.com';
//console.log(web)
//console.log(web.site)

// 构造函数形式 vs Class 形式
// function User2(name, age) {
//     // this.name = name;
//     // this.age = age;
//     let data = {name, age};
//     Object.defineProperties(this, 
//         {
//             name: {
//                 get() {
//                     return data.name;
//                 },
//                 set(value) {
//                     if(value.trim() === ''){
//                         throw new Error('Invalid name');;''
//                     }
//                     data.name = value;
//                 }
//             },
//             age: {
//                 get() {
//                     return data.age;
//                 },
//                 set(value) {
//                     if(value.trim() === ''){
//                         throw new Error('Invalid age');
//                     }
//                     data.age = value;
//                 }
//             }
//         }
//     )
// }
class User2{
    constructor(name, age) {
       this.data = {name, age}; 
    }
    get name() {
        return this.data.name;
    }
    set name(value) {
        if(value.trim() === ''){
            throw new Error('Invalid name');;''
        }
        this.data.name = value;
    }
}

let user2 = new User2('Vasya', 23);
user2.name = '123';
// console.log(user2)

// 对象的proxy
const hd = { name: 'Vasya'};
const proxy = new Proxy(hd, {
    get(obj,property){
        console.log(property);
        return obj[property];
    },
    set(obj, property, value) {

        console.log(property, value);

        obj[property] = value;

    }
})
// console.log(proxy.name)


// 函数的proxy
function factorial(n) {
    return n!== 1 ? n * factorial(n-1) : 1;
}
// console.log(factorial(3))
let proxy1 = new Proxy(factorial, {
    apply(target, thisArg, args) {
        console.time("time");
        target.apply(thisArg, args);
        console.timeEnd("time");
        console.log(target.apply(thisArg, args))
        
    }
})
///proxy1.apply({}, [3])
 console.log(proxy1.apply({}, [3]))

 // 数组代理
let lessons2 = [
    {
        name: 'math',
        price: '100',
        title: 'math123123123'
    },
    {
        name: 'english',
        price: '200',
         title: 'english123123123'
    },
    {
        name: 'physics',
        price: '300',
         title: 'physics123123123'
    }
];
let proxy2 = new Proxy(lessons2, {
    get(target, property) {
        for(let item of target) {
            if(item.title.length > 5) {
                item.title = item.title.substr(0, 5) + '...';
            }
        }
        return target[property];
       
        
    }
})
// console.log(proxy2[1], proxy2)

function View(){
    let proxy = new Proxy({},{
        get(target, property) {
           // console.log(target, property)
           return target[property]
        },
        set(target, property, value) {
           // console.log(target, property, value)
            document.querySelectorAll(`[v-model="${property}"]`).forEach(el => {  
              el.value = value;  
            })
            document.querySelectorAll(`[v-bind="${property}"]`).forEach(el => {  
              el.innerHTML = value;  
            })

            target[property] = value;
            return value;
        }
    })
    this.init = function () {
        const els = document.querySelectorAll("[v-model]");
        els.forEach(el =>{
            el.addEventListener('input', function(ev) {
                console.log(111)
                // 触发代理
                proxy[this.getAttribute('v-model')] = this.value;
            })
        })
    }
}
// new View().init();

class Validate {
    max(val, len){
        debugger
        return val.length <= len;
    }
    min(val, len){
        debugger
        return val.length > len;
    }
    isNumber(val){
        debugger
        return /^\d+$/.test(val);
    }
}
let validate = new Validate();
// console.log(validate.max('123', 3))
function ProxyFactory(target) {
    return new Proxy(target,{
        get(target, key){
            return target[key]
        },
        set(target, key, val){
            console.log(target, key, val)
           debugger
            const rules = target[key].getAttribute('validateRule');
            const validate = new Validate();
            let state = rules.split(",").every(rule => {
                debugger
                const info = rule.split(':');
                const result = validate[info[0]](val.value, info[1])
                return result;
            })
            console.log("validate result", state)
            if(!state){
                target[key].classList.add('error');
            } else {
                target[key].classList.remove('error');
            }
            target[key] = value;
            return value
        }
    })
}

const proxy3 =  ProxyFactory(document.querySelectorAll("[validateRule]"));
proxy3.forEach((el,i) => {
    console.log("proxy3", el);
    el.addEventListener('input', function(ev) {
        console.log(1111, this)
        proxy3[i] = this;
    })



})