import 'reflect-metadata';
let hd21 ={
    name: 'ywyxyxxx'
}
Reflect.defineMetadata('xj', {url: 'houdunren.com'}, hd21, 'name');
console.log(Reflect.getMetadata('xj', hd21, 'name'));

const RequiredDecorator: ParameterDecorator = (target: Object, propertyKey: string | symbol | undefined, parameterIndex: number)=> {
    console.log(target, propertyKey, parameterIndex);
    let requiredParams: number[] = [];
    requiredParams.push(parameterIndex);
    Reflect.defineMetadata('required', requiredParams, target, <string | symbol>propertyKey);
}
const validateDecorator: MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor)=> {
    console.log(target, propertyKey, descriptor);
   // console.log(Reflect.getMetadata('required', target, propertyKey))
   const method = descriptor.value;
   descriptor.value = ()=>{
        const requiredParams: number[] = Reflect.getMetadata('required', target, propertyKey) || [];
        requiredParams.forEach((index)=>{
           
        })
   }
}

class Hd21{
    @validateDecorator
    find(name: string, @RequiredDecorator id: number){
       
    }
}

new Hd21().find('dafa    ', 123);