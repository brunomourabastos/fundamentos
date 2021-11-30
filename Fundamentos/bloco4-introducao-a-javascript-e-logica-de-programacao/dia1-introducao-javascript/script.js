// const a = 4;
// const b = 5;

// soma = a + b;
// console.log("Soma", soma);
// subtracao = a - b;
// console.log("Subtracao", subtracao);
// multiplicacao = a * b;
// console.log("Multiplicacao", multiplicacao);
// divisao = a / b;
// console.log("Divisao", divisao);
// modulo = a % b;
// console.log("Restante da divisao entre a/b", modulo);

// const num_a = 9;
// const num_b = 8;

// if (num_a > num_b) {
//     console.log(num_a, "é o maior número");
// } else {
//     console.log(num_b, "é o maior número.")
// }

// const maior_a = 4;
// const maior_b = 2;
// const maior_c = 3;

// if (maior_a > maior_b && maior_a > maior_c) {
//     console.log("Maior número é:", maior_a);
// } else if (maior_b > maior_a && maior_b > maior_c) {
//     console.log("Maior número é:", maior_b);

// } else {
//     console.log("Maior número é:", maior_c);
// }

// const numeroPositivo = -2;

// if (numeroPositivo > 0) {
//     console.log("Positive");
// } else {
//     console.log("Negative");
// }

// const angulo_a = 90;
// const angulo_b = -45;
// const angulo_c = 45;

// let soma_angulos = angulo_a + angulo_b + angulo_c;

// if (soma_angulos === 180) {
//     triangulo = true;
// } else {
//     triangulo = false;
// }
// switch (triangulo) {
//     case true:
//         console.log("Angulos representam um triângulo");
//         break;
//     case false:
//         console.log("Angulos não representam um triângulo");
// }

// let lista = [1, 2, 3, 4, 5, 6, 7, 8];
// for (let x in lista) {
//     console.log(lista[x]);
// }

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let menuServices = menu[1];

// console.log(menuServices);
// let indexOfPortfolio = menu.indexOf('Portfólio');
// console.log(indexOfPortfolio)
// menu.push('Contato');
// console.log(menu)

// var numero = 5;
// for (var contador = 1; contador <= 10; contador++) {
//     console.log(numero * contador);
// }

//Programa que informa movimento das peças de xadrez:
let pecaXadrez = 'cavalo';
let xadrezPadrao = pecaXadrez.toLowerCase();

switch (xadrezPadrao) {
    case 'peao':
        console.log("Anda uma casa e come na diagonal");
        break;
    case 'torre':
        console.log("Anda somente nas retas");
        break;
    case 'cavalo':
        console.log("Movimentação em L");
        break;
    case 'bispo':
        console.log("Movimentação somente na diagonal");
        break;
    case 'rainha':
        console.log("Movimento livre");
        break;
    case 'rei':
        console.log("Anda somente 1 casa para qualquer direção");
        break;
    default:
        console.log("Peça desconhecida");
}