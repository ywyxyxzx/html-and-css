function sumdigui(...arr){
    if(arr.length === 0){
        return 0
    }
    let temp = arr.shift();
    console.log(temp, 'temp');
    console.log(arr, 'arr');
    return temp + sumdigui(...arr);
}



//console.log(sumdigui(1,2,3,4,5));

function User(){
    console.log(this.name)
}
let lisst = {
    name: "12312312"
}
User.call(lisst);
console.log(User);