

{
    type HU = { name: string, age: number };
    type HE = { name: string, age: number, height: number };
    type h1 = HE extends HU ? true : false;
    const h11: h1 = true;
    console.log(h11);
}
{
    type XI = string;
    type XE<T> = [T] extends [XI] ? string : boolean;
    const h12: XE<string | boolean> = false;
    console.log(h12);
}
{
    // void
    function h123(): void {

    }
    let xj = h123();
    xj = undefined
}
// never 异常 所有类型子类型
{
    function h124(): never {
        throw new Error('error');
    }
    //h124();
    type h1A12 = never extends string ? true : false;
    const h1A121: h1A12 = true;
    console.log(h1A121);
}
// 排除类型(前面和后面，取前面里后面中的交集), 前面是大，后面是小
{
    //type EXCLUDE<T, U> = T extends U? never : T; 
    type XI123213 = string | boolean;
    type H12312 = string | number | boolean;
    const he123123: Exclude<H12312, XI123213> = 123;


}
// 保留类型类型（前面和后面，后面取前面的交集取交集）
{
    type H231213 = string | number | boolean;
    const h13c3: Extract<H231213, string | number> = 123; // 保留string和number
}
// 提取属性（前面为集合，后面为属性名称）
{
    type HU123 = { name: string, age: number, skill: string };
    const xj: Pick<HU123, 'name' | 'age'> = { name: 'xj', age: 123 };
}
// 属性变成可选
{
    type HU123 = { name: string, age: number, skill: string };
    type H1231 = Partial<HU123>;
    const xj: H1231 = { name: 'xj', age: 123 };

}
// 批量定义类型 name, age （前面属性名，用 | 隔开，后面是值，同样用 | 隔开）
{
    type hD = Record<'name' | 'age', string | number>
    const xj: hD = { name: 'xj', age: 123 };
}
// typeof 一个值 类型 keyof 索引
{
    function xj(obj: object, key: string) {
        return obj[key as keyof typeof obj]
    }
}
// 交叉类型
{
    type hd = ('a' | 'b') & ('a');
    type hd2 = ('a' | 'b') & ('a' | string);
}
// 排除属性 as断言写法
{
    type User = { name: string, age: number, height: number };

    type FilterObjectProperty<T, U> = {
        [K in keyof T as Exclude<K, U>]: T[K]
    }

    type h13 = FilterObjectProperty<User, 'name' | 'age'>;
    const h131: h13 = { height: 123 };
}
{
    type User = { name: string, age: number, get(a: string): void };
    type FilterProperty<T, U> = {
        [K in keyof T]: T[K] extends U ? never : K;
    }[keyof T]
    type sdfa = FilterProperty<User, Function | number>
    type UU = Pick<User, sdfa>
}

// Omit 从类型中过滤掉指定属性，这与 Pick 类型工具功能相反
{
    type HD = { name: string, age: number, height: number };
    type h131 = Omit<HD, 'name' | 'age'>;
    const h1311: h131 = { height: 123 };
}
// 自定义
{
    type HD = { name: string, age: number, height: number };
    type MyOmit<T, U> = Pick<T, {
        [K in keyof T]: K extends U ? never : K }[keyof T]>
    type XW = MyOmit<HD, 'name' | 'age'>;
    const xw: XW = { height: 123 };
}
// 自定义2
{
    type HD = { name: string, age: number, height: number };
    type MyOmit<T, U> = Pick<T, Exclude<keyof T, U>>
    type XW = MyOmit<HD, 'name' | 'age'>;
    const xw: XW = { height: 123 };
}
//infer 推断
//下面使用 infer 推断属性值类型
{
    type HD = { name: string, age: number }
    type AttrType<T> = T extends { name: infer M, age: infer M } ? M : T;
    type valueType = AttrType<HD> //string | number
}
//下面使用 infer 获取值类型
{
    type USER = { name: string, age: number, get(a: string): void, set(a: string): void}
    type GetType<T> = {
        [K in keyof T]: T[K] extends (infer U) ? U : K
    }[keyof T];

    type valueType = GetType<USER>;
}
//下面是获取函数返回值类型
{
    type HD = (n: string) => number[]

    type GetFunctionReturnValue<T> = T extends ((...args: any) => (infer U)[]) ? U : T

    type valueType = GetFunctionReturnValue<HD>;
}