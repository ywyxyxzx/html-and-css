const PropDecorator: PropertyDecorator = (target: Object, propertyKey: string | symbol) => {
     console.log(1);
    console.log(target, propertyKey);
}
const ParamsDecorator: ParameterDecorator = (target: Object, propertyKey: string | symbol | undefined, parameterIndex: number) => {
    console.log(2);
    console.log(target, propertyKey, parameterIndex);
}

class Hd18{
    constructor(){}
    public title: string | undefined;
    public show(id: number = 1, compouted: boolean, @ParamsDecorator content:string){

    }
}