// let player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: {
//         golden: 2,
//         silver: 3
//     },
// }
// console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');
// player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];
// console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' +
//     player.bestInTheWorld.length + ' vezes. ');

// console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');


// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge'
// };

// for (key in names) {
//     console.log('Olá ' + names[key] + "!");
// };

// let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
// };
// for (key in car) {
//     console.log(key + " " + car[key])
// }

//Exercicio 1 - 4.2
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
};
// console.log("Bom dia ", info.personagem + '!');
// for (key in info) {
//     console.log(info[key]);
// }
let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};
for (key in info) {
    if (key === 'recorrente' && info[key] === 'Sim' && info2[key] === 'Sim') {
        console.log('Ambos recorrentes')
    } else {
        console.log(info[key] + ' e ' + info2[key])
    }
}