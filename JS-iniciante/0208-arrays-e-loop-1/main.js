//array
const num = [10, 20, 30, 40, 50, 60, 70, 80];
console.log(num[4]); //5

num.pop(); // Remove o último item e retorna ele
num.push(300); // Adiciona ao final da array
num.length; // 8

console.log(num); //[10, 20, 30, 40, 50, 60, 70, 300]

num.forEach(function (numero, i, array) {
  console.log(`${numero} - ${i} index ${array}`); //10, 20, 30, 40, 50, 60, 70, 300
});
console.log("--------------------------------");

const numeros = [100, 200, 300, 400, 500, 600];

numeros.forEach(function (numero, index) {
  console.log(numero, index);
});
console.log("--------------------------------");

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
const copaBr = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
copaBr.forEach(function (vitoria) {
  console.log(`o brasil ganhou a copa de ${vitoria}`);
});

console.log("--------------------------------");

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];

// frutas.forEach(function (fruta) {
//   if (fruta === "Pera") {
//     console.log(frutas);
//     break;
//   }
// });

for(i = 0; i < frutas.length; i++) {
    console.log(`${frutas[i]}`);
    if(frutas[i] === "Pera"){
        break;
    }
}
console.log("--------------------------------");

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
const melancia = frutas[frutas.length - 1];
console.log(melancia);