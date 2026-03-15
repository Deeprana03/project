let numbers = [23, 45, 67, 89, 12, 90, 44];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let num of numbers) {
  if (num > largest) {
    secondLargest = largest;
    largest = num;
  } else if (num > secondLargest && num !== largest) {
    secondLargest = num;
  }
}

console.log("Second Largest Number:", secondLargest);