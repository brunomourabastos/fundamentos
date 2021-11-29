// const myName = "Bruno";
// const birthCity = "Campos dos Goytacazes";
// let birthYear = 1987;


// console.log("Meu nome é ", myName, "\nNascido na cidade de: ", birthCity, "\nNo ano de:", birthYear);

// let patiendId = 50;
// let isEnrolled = true;
// const patientInfo = {
//     firtName: 'Ana',
//     lastName: 'Santos',
// };
// const patientEmail = 'ana@email.com'

// console.log(typeof patiendId);
// console.log(typeof isEnrolled);
// console.log(typeof patientInfo);
// console.log(typeof patientEmail);

// Exercício de atribuição de aritmética na lógica
// const base = 5;
// let height = 8;
// const area = base * height;
// console.log('A área é:', area);
// const perimeter = base * 2 + height * 2;
// console.log('O perímetro é:', perimeter);



// // Exercicio Com operadores lógicos
// const comida = 'pão na chapa';
// const bebida = 'cafézinho';

// if (bebida === 'cafézinho' && comida === 'pão na chapa') {
//     console.log('Muito obrigado pela refeição :)');
// } else {
//     console.log('Acho que houve um engano com meu pedido');
// }


//Exercício com operações &&
// const currentHour = 3;
// let message = null;
// if (currentHour >= 22) {
//     message = "Não deveríamos comer nada, é hora de dormir.";
// } else if (currentHour >= 18 && currentHour < 22) {
//     message = "Rango da noite, vamos jantar :D";

// } else if (currentHour >= 14 && currentHour < 18) {
//     message = "Vamos fazer um bolo pro café da tarde?";
// } else if (currentHour >= 11 && currentHour < 14) {
//     message = "Hora do almoço!!";
// } else if (currentHour >= 4 && currentHour < 11) {
//     message = "Hmmm, cheiro de café recém passado!";
// } else {
//     message = "Deveria estar dormindo!";
// }
// console.log(message);

// Exercício de operação ||

// let weekDay = "quarta-feira";
// if (weekDay === "segunda-feira" || weekDay == "terça-feira" || weekDay == "quarta-feira" || weekDay == "quinta-feira ||" || weekDay == "sexta-feira") {
//     console.log("Oba! Mais um dia de aprendizado na Trybe!")
// } else {
//     console.log("Finalmente, descanso merecido!")
// }



// "Parabéns, você foi aprovada(o)!" , "lista" , "reprovada"



//Exercicio com Switch para informação de aprovado/reprovado.
// let condicaoCandidato = null;

// const nota = 0;
// if (nota >= 80) {
//     condicaoCandidato = 'aprovado';
// } else if (nota < 80 && nota >= 60) {
//     condicaoCandidato = 'lista';
// } else {
//     condicaoCandidato = 'reprovada';
// }

// switch (condicaoCandidato) {
//     case 'aprovado':
//         console.log("Parabéns, você está aprovado!");
//         break;

//     case 'lista':
//         console.log("Você está na lista de espera");
//         break;

//     case 'reprovada':
//         console.log("Sua situação é: Reprovado!");
//         break;

//     default:
//         console.log("Não se aplica.")
// }


//exercicio Swithc para tradução semáforo:
// let trafficLight = "amarelo";
// switch (trafficLight) {
//     case "vermelho":
//         console.log("Pare");
//         break;

//     case "amarelo":
//         console.log("Atenção");
//         break;

//     case "verde":
//         console.log("Siga em frente");
//         break;

//     default:
//         console.log("Informação inválida");
// }