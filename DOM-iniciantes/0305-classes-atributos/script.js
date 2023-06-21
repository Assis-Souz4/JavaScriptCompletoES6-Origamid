// https://www.origamid.com/slide/javascript-completo-es6/#/0305-classes-e-atributos/1

//LISTA DE CLASSES
const menu = document.querySelector('.menu');
console.log(menu);

console.log(menu.className);//menu (string nome da classe)
console.log(menu.classList);//lista de classe

menu.classList.add('ativo');//add classe
menu.classList.add('ativo', 'mobile');//add duas classe
menu.classList.remove('ativo');//remove
menu.classList.toggle('ativo');//remove e add
console.log(menu.classList.contains('ativo'));//verifica true ou false
menu.classList.replace('ativo', 'inativo');//primeiro parametro é oque sera alterado e o ultimo o novo que ira substituir 
console.log(menu.classList[1]);// acessando lista de classe

//ATRIBUTOS
//retorna um array-like com os atributos dos elementos

const animais = document.querySelector('.animais');
console.log(animais.attributes);// retorna todos os atributos
console.log(animais.attributes[0]);// retorna o primeiro atributo
console.log(animais.attributes.class);// retorna a classe
console.log(animais.attributes.id);// retorna o id

//GETATTRIBUTE E SETATTRIBUTE

//GETATTRIBUTE
const img = document.querySelector('img');
const paragraph = document.querySelector('p');

console.log(img.getAttribute('src'));//./img/imagem1.jpg
console.log(paragraph.getAttribute('class'));//null

//SETATTRIBUTE
paragraph.setAttribute('class', 'nova-class'); //add nova-classe no primeiro p

//HASATTRIBUTE - boolean
console.log(paragraph.hasAttribute('class'));//true

//REMOVEATTRIBUTE
paragraph.removeAttribute('class');
console.log(paragraph);

