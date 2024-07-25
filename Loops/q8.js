//Print first 10 odd numbers. (Do not use `while` loop)
let count = 0;
for (let i = 1; count < 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
    count++;
  }
}

