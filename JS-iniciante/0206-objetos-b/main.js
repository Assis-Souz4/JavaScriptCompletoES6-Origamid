// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

const pessoa = {
  nome: "ana",
  sobrenome: "clara",
  idade: 20
};
console.log(pessoa);

// Crie um método no objeto anterior, que mostre o seu nome completo

pessoa.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi"
};
carro.preco = 3000;
console.log(carro);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

const cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: 10,
  latir(pessoa) {
    if (pessoa === "homem") {
      console.log("auauau");
    }
  }
};
console.log(cachorro);
console.log(cachorro.latir('homem'));
