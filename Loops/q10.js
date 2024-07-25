// Print the sum of digits of a number. (Do not use `while` loop)
let num = 25;
let str = String(num);
let sum = 0;
for (let i = 0; i < str.length; i++) {

  let temp = +str[i];
  sum += temp;
}
console.log(sum);
