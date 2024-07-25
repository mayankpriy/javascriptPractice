// Print elements of an array in reverse order. (Do not use `reverse`)

let arr = [1, 2, 4, 6, 7, 8];
let reverseArray = [];

for (i = arr.length - 1; i >= 0; i--) {
  reverseArray.push(arr[i]);
}

console.log("final", reverseArray);
