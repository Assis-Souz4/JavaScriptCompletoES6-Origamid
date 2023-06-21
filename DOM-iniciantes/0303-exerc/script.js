// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll('img[src^= "./img/"]');
console.log(imagens);
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagem2 = document.querySelectorAll('img[src^= "./img/imagem"]');
console.log(imagem2);
// Selecione todos os links internos (onde o href começa com #)
const links = document.querySelectorAll('[href^= "#"]');
console.log(links);
// Selecione o primeiro h2 dentro de .animais-descricao
const firstH2 = document.querySelector('.animais-descricao h2');
console.log(firstH2);
// Selecione o último p do site
const allP = document.querySelectorAll('p');
const lastP = allP[--allP.length];
console.log(lastP);