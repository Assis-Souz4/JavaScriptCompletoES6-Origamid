// Adicione a classe ativo a todos os itens do menu
let menu = document.querySelectorAll('.menu li');
console.log(menu);

menu.forEach((li) =>{
    li.setAttribute('class', 'ativo');
    console.log(li);
})

console.log('================================');
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.forEach((li) =>{
    li.removeAttribute('class', 'ativo');
    console.log(li);
})
menu[0].setAttribute('class', 'ativo');

console.log('================================');
// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');
imgs.forEach((img) => {
    const altIsTrue = img.hasAttribute('alt');
    console.log(altIsTrue);
})


console.log('================================');
// Modifique o href do link externo no menu