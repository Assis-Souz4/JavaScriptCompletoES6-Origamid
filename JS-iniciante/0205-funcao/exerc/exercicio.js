// Crie uma função para verificar se um valor é Truthy

function verificaDado(dado){
    if (typeof dado === 'number'){
        console.log('number');
        return dado;
    }
    else if (typeof dado === 'string'){
        console.log('string');
        return dado;
    }else{
        console.log('dado invalido');
    }
}
console.log(verificaDado(8));
console.log(verificaDado('8'));
console.log(verificaDado('*'));
console.log(verificaDado());
console.log(verificaDado(""));
console.log(verificaDado(null));
console.log(verificaDado(undefined));

console.log('----------------------------------------------------------------');
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(lado1, lado2, lado3, lado4) {
    return lado1 + lado2 + lado3 + lado4;
}
console.log(perimetroQuadrado(10, 10, 10, 10));

console.log('----------------------------------------------------------------');

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}
console.log(nomeCompleto('Assis', 'Souza'));

console.log('----------------------------------------------------------------');

// Crie uma função que verifica se um número é par

function isPar (num){
    if(num % 2 == 0){
        console.log('par');
    }else{
        console.log('inpar');
    }
}
isPar(126);
isPar(13);

console.log('----------------------------------------------------------------');

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento "scroll" ocorrer

const body = document.querySelector('body');
body.style.height = '100vh';

addEventListener('scroll', function() {
    console.log('Assis Souza');
})

console.log('----------------------------------------------------------------');

// Corrija o erro abaixo

var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  console.log(precisoVisitar(20));
  console.log(jaVisitei(20));

  console.log('----------------------------------------------------------------');