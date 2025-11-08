function extend(sub, sup) {
    // sub.prototype = Object.create(sup.prototype);
    Object.setPrototypeOf(sub.prototype, sup.prototype);
    Object.defineProperty(sub.prototype, 'constructor', {
        value: sub,
        enumerable: false,
        writable: true,
        configurable: true
    })

    sub.prototype = Object.create(sup.prototype);
    sub.prototype.constructor = sub;
    sub.prototype.super = sup.prototype;
}

function User(name, age) {
    this.name = name;
    this.age = age;
}
function Admin(name, age) {
    User.call(this, name, age);
}
extend(Admin, User) 

let xj = new Admin('xj', 18);
console.dir(xj)



console.dir(Admin.prototype)
console.dir(User.prototype)
console.dir(`======================`)

function Aa(){


}
let aa = new Aa()

console.dir(aa.__proto__ === Aa.prototype)

console.dir(Aa.prototype)
console.dir(`======================`)
console.dir( Object.prototype)

console.dir(Aa.__proto__ === Function.prototype)