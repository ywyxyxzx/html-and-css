
type HU = { name: string , age: number};
type HE = { name: string , age: number, height: number};
type h1 = HE extends HU ? true : false;
const h11: h1 = true;
console.log(h11);

type XI = string | number;
type XE<T> = T extends XI? string : boolean;
const h12 : XE<string> = 'string';