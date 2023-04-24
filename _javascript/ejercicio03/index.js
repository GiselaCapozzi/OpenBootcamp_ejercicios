// Factorial for

let total = 1;
let num = 10;

for (let i = 1; i <= num; i++) {
  total = total * i;
}
console.log(total);

// Factorial while
let j = 1;
let num2 = 10;
let total2 = 1;
while (j <= num2) {
  total2 = total2 * j;
  j++
}
console.log(total2);

// Factorial con break
let total3 = 1;
let num3 = 10;

for (let k = 1; k <= num; k++) {
  if (k >= 7) {
    break;
  }
  total3 = total3 * k
}
console.log(total3)