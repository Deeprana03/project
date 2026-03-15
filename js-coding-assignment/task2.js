function uniqueElements(arr1, arr2) {
  let combined = arr1.concat(arr2);
  let unique = [];

  for (let i = 0; i < combined.length; i++) {
    if (
      combined.indexOf(combined[i]) === combined.lastIndexOf(combined[i])
    ) {
      unique.push(combined[i]);
    }
  }

  return unique;
}

let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];

console.log(uniqueElements(array1, array2));