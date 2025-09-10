// copyWithin()

let arr = [1,2,3,4,5,6];
//console.log(arr.copyWithin(2,1,1)); 

// iterator //
let arr1 = ["hcssf", "dafsf"];
let values = arr1.values();

//while(({value, done} = values.next()) && done === false){
  //  console.log(value, done);
//}
let entries = arr1.entries();
console.log(entries, "arr1.entries");
//console.log(entries.next(), "arr1.entries1");

function showEntries(arr1){
    let entries = arr1.entries();
    let {value, done} = entries.next();
   console.log(value, done, "entries");
}
 // showEntries(arr1);
 function showEntries2(arr1){
    for(const [key, value] of arr1.entries()){
        console.log(key, value);
    }
}
// showEntries2(arr1);

let stustores = [
    {
        className: "js", score: 98
    },
    {
        className: "css", score: 90
    },
    {
        className: "html", score: 55
    }
]
// every true = true
// some true  = true
let resEvery = stustores.every((element, index, array) =>{
  //  console.log(element, index, array);
    return element.score > 50;
})
//console.log(resEvery);
let resSome = stustores.some((element, index, array) =>{
   // console.log(element, index, array);
    return element.score < 60;
})
//console.log(resSome);

// reduce
let arr2 = [1,2,3,4,5];
 // sum
let sum1 = arr2.reduce((pre,current, index, arr)=>{
   console.log(pre,current, index, arr)
    let sum2 = Number(pre) + Number(current);
    return sum2;
}, 0)
//console.log(sum1, 'sum = ')
 // max
let max = arr2.reduce((pre,current, index, arr)=>{
  //  console.log(pre,current, index, arr)
    let max2 = Number(pre) > Number(current) ? Number(pre) : Number(current);
    return max2;
})
//console.log(max,'max = ')

function getOverScore(arr, score, attr = 'score'){
    return arr.reduce((newArr, item)=>{
        if(item[attr] >= score){
            newArr.push(item);
        }
        return newArr;
    }, [])
}
// console.table(getOverScore(stustores, 90));   
// delete repeated element in array
let arr3 = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9];
function deleteRepeated(arr){
//     let newArr = [];
//    arr.filter((item, index)=>{
//         if(!newArr.includes(item)){
//             newArr.push(item);
//         }
//     })
//     return newArr;
// }
  return arr.reduce((newArr, value)=>{
    if(!newArr.includes(value)){
        newArr.push(value);
    }
    return newArr;
    }, []);
}
console.table(deleteRepeated(arr3), 'reduce function');