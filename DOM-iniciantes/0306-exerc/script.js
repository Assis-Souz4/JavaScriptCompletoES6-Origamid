//https://www.origamid.com/slide/javascript-completo-es6/#/0305-classes-e-atributos/1

// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImg = document.querySelector('img');
const elAoTopo = primeiraImg.offsetTop;
console.log(elAoTopo);

console.log('================================================');
// Retorne a soma da largura de todas as imagens
const imgs = document.querySelectorAll('img');
let soma = Number();
imgs.forEach((img) => {
    let widthImg = img.offsetWidth;
    soma += widthImg;
    return soma;
});
console.log(soma);

console.log('================================================');
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');

const width = links.forEach((link) => {
    const rect = link.getBoundingClientRect();
    if (rect.width >= 48 && rect.height >= 48){
        console.log(`minimo recomendado`);
    }
    else{
        console.log(`menor que 48x48`);
    }
});

console.log('================================================');
//Se o browser for menor que 720px,
//adicione a classe menu-mobile ao menu

const tela = window.innerWidth;
console.log(tela);
if(tela < 720){
    let menu = document.querySelector('.menu');
    menu.classList.add('menuMobile');
}