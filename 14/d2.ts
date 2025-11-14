// 方法装饰器
const showDecorator:MethodDecorator = (...args:any) => { // target, propertyKey, descriptor
    console.log(args);
}
class User {
    @showDecorator
    public show(){}
}