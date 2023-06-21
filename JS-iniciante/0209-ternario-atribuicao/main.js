'use strict';
//atribuição
var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)

//ternario
var idade = 19;
var podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber) // Pode beber

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;
console.log(scroll);

console.log('----------------------------------------------------------------');

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = (possuiCarro && possuiCasa) ? true : false;
console.log(darCredito);

console.log('----------------------------------------------------------------');

var numero = 50;

for(var numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);

console.log('----------------------------------------------------------------');

// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  var marca = 'Fiat';
  var portas = 4;
}
console.log(cor, marca, portas);

// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  let dois = 2;
  return x / dois;

}
console.log(somarDois(4));
console.log(dividirDois(6));

console.log('================================');

// O que fazer para total retornar 500?
 const numero2 = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total2 = 10 * numero2;
console.log(total2);