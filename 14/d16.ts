type userType = {
    name: string;
    isLogin: boolean;
    permissions: string[];
}
const user: userType = {
    name: 'ywy',
    isLogin: true,
    permissions: ["admin", "user"]
}


const AccessDecorator= (keys: string[]): MethodDecorator  => {
    return (target:Object, propertyKey:string | symbol, descriptor:PropertyDescriptor) => {
        const method = descriptor.value;
        const isValidate = (permissions: string[]) => {
            return keys.every((item) => {
                return user.permissions.includes(item) ;
            })
        };
        descriptor.value = () => {
            if (!user.isLogin) {
               alert("请先登录");
            }
            if (!isValidate(user.permissions)) {
                alert("无权限");
            }
            return method();      
        };
    }
}

class Login{
    constructor() {}
    
    @AccessDecorator(['admin1'])
    init(){ 
        console.log('init')
    }
}

new Login().init()