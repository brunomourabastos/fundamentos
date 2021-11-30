let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sumNumbers = 0;

// for (numberIndex = 0; numberIndex < numbers.length; numberIndex += 1) {
//     console.log(numbers[numberIndex]);
// }

// for (number of numbers) {
//     sumNumbers += number;
// }
// console.log(sumNumbers);

for (numbersIndex = 0; numbersIndex < numbers.length; numbersIndex += 1) {
    sumNumbers += numbers[numbersIndex];

}
let mediaNumbers = sumNumbers / numbers.length;
console.log("Sua média foi de: ", mediaNumbers);