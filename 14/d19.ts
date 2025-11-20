const LowerDecorator: PropertyDecorator = (target: Object, propertyKey: string | symbol) => {
    let value: string;
    Object.defineProperty(target, propertyKey, {
        get: () => {
            return value;
        },
        set: v =>{
            value = v.toLowerCase();
        }
    })
}
class Hd19{
    constructor(){}
    @LowerDecorator
    public title : string;
}
let hd19 = new Hd19();
hd19.title = "Hd19";
console.log(hd19.title);