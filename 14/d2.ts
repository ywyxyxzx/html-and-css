// 方法装饰器
const showDecorator:MethodDecorator = (target, propertyKey, descriptor:PropertyDescriptor) => { // target, propertyKey, descriptor
    descriptor.value = () => {
        console.log('show111');
    }
    return descriptor
}
class User {
    @showDecorator
    public show(){
        console.log('show');
    }
}
new User().show()