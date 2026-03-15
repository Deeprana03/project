function uniqueElements(arr1, arr2) {

let result = [];

for(let i = 0; i < arr1.length; i++){
    if(!arr2.includes(arr1[i])){
        result.push(arr1[i]);
    }
}

for(let i = 0; i < arr2.length; i++){
    if(!arr1.includes(arr2[i])){
        result.push(arr2[i]);
    }
}

return result;
}

let array1 = [1,2,3,4];
let array2 = [3,4,5,6];

console.log("Unique Elements:", uniqueElements(array1,array2));