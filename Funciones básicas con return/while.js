let ouput = [];
let count = 1;

// function fizzBuzz() {
//   while (count <= 100) {
//     if (count % 3 === 0 && count % 5 === 0) {
//       ouput.push("FizzBuzz");
//     } else if (count % 3 === 0) {
//       ouput.push("Fizz");
//     } else if (count % 5 === 0) {
//       ouput.push("Buzz");
//     } else {
//       ouput.push(count);
//     }
//     count++;
//   } //fin while
//   console.log(ouput);
// }

// fizzBuzz();

/* let numberOfBootles = 99;

while (numberOfBootles >= 0) {
  let bootleWord = "bootle";
  if (numberOfBootles === 1) {
    bootleWord = "bootles";
  }
  console.log(numberOfBootles + " " + bootleWord + " of beer on the wall");
  console.log("Take one down, pass it around,");
  numberOfBootles--;
  console.log(numberOfBootles + " " + bootleWord + " of beer on the wall");
} */

/* function fizzBuzz() {
  for (let count = 1; count < 101; count++) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuzz");
    } else if (count % 3 === 0) {
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(count);
    }
  } //fin for
  console.log(output);
}

fizzBuzz();
 */

// versión 1: casos base + ciclo
function fibonacciGeneratorV1(n) {
  const output = [];

  if (n === 1) {
    output.push(0);
    return output;
  } else if (n === 2) {
    output.push(0, 1);
    return output;
  } else {
    output.push(0, 1);
    for (let i = 2; i < n; i++) {
      output.push(output[i - 1] + output[i - 2]);
    }
    return output;
  }
}
console.log(fibonacciGeneratorV1(1));
console.log(fibonacciGeneratorV1(2));
console.log(fibonacciGeneratorV1(8));

// versión 2: un solo ciclo
function fibonacciGeneratorV2(n) {
  const output = [];

  for (let i = 0; i < n; i++) {
    if (i < 2) {
      output.push(i);
    } else {
      output.push(output[i - 1] + output[i - 2]);
    }
  }

  return output;
}
console.log(fibonacciGeneratorV2(1));
console.log(fibonacciGeneratorV2(2));
console.log(fibonacciGeneratorV2(8));
