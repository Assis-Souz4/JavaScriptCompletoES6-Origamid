// https://www.origamid.com/slide/javascript-completo-es6/#/1

function areaQuadrada(lado){
    return lado * lado;
}
var resultado = areaQuadrada(4);
console.log(resultado);//16

// ################################

function imc(peso, altura){
    const imc = peso / (altura ** 2)
    return imc;
}
console.log(imc(79, 1.77));//25.2162533116282

//##############################

function idade(num){
    if(num >= 18){
        return('ja posso dirigir');
    }else {
        return('prefiro ir de uber');
    }
}
console.log(idade());//prefiro ir de uber obs sem argumentos caiu no else

//##########################

function media(nota){
    if (typeof nota !== 'number') {
        return 'entre com um numero!'
    } else if(nota > 7) {
        return 'aprovado!'
    }else{
        return 'reprovado!'
    }
}
console.log(media(5))//reprovado

//##########################

addEventListener('click', function(){
    console.log('click');
})

//##########################

function soma2(a, b){
    const result = a + b;
    console.log(result);//7
}
console.log(soma2(5, 2));//undefined pq não existe return