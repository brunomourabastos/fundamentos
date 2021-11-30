let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sumNumbers = 0;
let biggestNumber = numbers[0];
let oddsNumber = 0;


//Exericio 1:
// for (let numberIndex = 0; numberIndex < numbers.length; numberIndex += 1) {
//     console.log(numbers[numberIndex]);
// }

//Exericio 2:
// for (number of numbers) {
//     sumNumbers += number;
// }
// console.log(sumNumbers);

//Exercicio 3:
// for (let numbersIndex = 0; numbersIndex < numbers.length; numbersIndex += 1) {
//     sumNumbers += numbers[numbersIndex];
// }
// let mediaNumbers = sumNumbers / numbers.length;
// console.log("Sua média foi de: ", mediaNumbers);

//Exercicio 4:
// for (let numbersIndex = 0; numbersIndex < numbers.length; numbersIndex += 1) {
//     sumNumbers += numbers[numbersIndex];
// }
// let mediaNumbers = sumNumbers / numbers.length;
// console.log("Sua média foi de: ", mediaNumbers);
// if (mediaNumbers > 20) {
//     console.log("Valor maior que 20.")
// } else {
//     console.log("Valor menor ou igual a 20");
// }

//Exercicio 5:
// for (let numbersIndex = 0; numbersIndex < numbers.length; numbersIndex += 1) {
//     if (numbers[numbersIndex] > biggestNumber) {
//         biggestNumber = numbers[numbersIndex];
//     }
// }
// console.log(biggestNumber);

//Exercicio 6:
// for (let numbersIndex = 0; numbersIndex < numbers.length; numbersIndex += 1) {
//     if (numbers[numbersIndex] % 2 == 1) {
//         oddsNumber += 1;
//     }
// }
// if (oddsNumber > 0) {
//     console.log("A quantidade de números ímpares é: ", oddsNumber);
// } else {
//     console.log("Nenhum valor ímpar encontrado.");
// }

//Exercicio 7:
let lowestNumber = numbers[0];
for (number of numbers) {
    if (number < lowestNumber) {
        lowestNumber = number;
    }
}
console.log(lowestNumber);