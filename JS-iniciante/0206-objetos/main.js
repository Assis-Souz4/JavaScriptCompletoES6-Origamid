//objetos

let pessoa = {
    nome: 'ana',
    sobrenome : 'abreu',
    idade: 20,
};
console.log(pessoa.nome);

console.log('----------------');

//objetos com função dentro

let quadrado = {
    lados: 10,
    area: function(lado) {
        return this.lados * 4;
    },
    perimetro: function(lado) {
        return this.lados * lado;
    }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

console.log('----------------');