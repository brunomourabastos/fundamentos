let ondeEsta = document.getElementById("elementoOndeVoceEsta");

let ondeEstaPai = ondeEsta.parentNode;
ondeEstaPai.style.color = "red";

let primeiroFilho = ondeEstaPai.firstChild;
primeiroFilho.textContent = "Eu sou o primeiro filho."

let previousFilho = ondeEsta.previousSibling;
previousFilho.textContent = "Eu também sou o primeiro filho."

let atencao = ondeEsta.nextSibling;


let terceiroFilho = ondeEsta.nextElementSibling;


let terceiroFilhoPai = ondeEstaPai.lastChild.previousSibling.previousSibling.previousSibling;
console.log(terceiroFilhoPai);


let novoElemento = document.createElement("section");
novoElemento.innerText = "Sou irmao do elemento Onde Voce Esta";

ondeEstaPai.appendChild(novoElemento);
console.log(ondeEstaPai)

let filhoOndeEsta = document.createElement('section');
filhoOndeEsta.innerText = "Sou filho do Elemento onde voce esta";
ondeEsta.appendChild(filhoOndeEsta);

let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
let netoPai = document.createElement('section');
netoPai.innerText = "Sou filho do primeiro filho do filho";
primeiroFilhoDoFilho.appendChild(netoPai);

let terceiroBacuri = document.createElement('section');
terceiroBacuri.innerText = "Sou bacuri";
netoPai.appendChild(terceiroBacuri);

let maiorDeTOdos = document.getElementById('paiDoPai');
maiorDeTOdos.removeChild(primeiroFilho);