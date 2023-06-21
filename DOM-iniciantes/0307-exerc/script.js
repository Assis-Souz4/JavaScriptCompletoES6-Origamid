// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const links = document.querySelectorAll('a[href^="#"]');

function clickLink(e) {
  e.preventDefault();
  links.forEach((link) => {
    link.classList.remove("ativo");
  });
  e.currentTarget.classList.add("ativo");
}

links.forEach((link) => {
  link.addEventListener("click", clickLink);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
{
  const body = document.querySelector("body");
  function mostrarClick(e) {
    e.preventDefault();
    console.log(e.target);
  }
  body.addEventListener("click", mostrarClick);
}
// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
{
  const body = document.querySelector("body");
  function remover(e) {
    e.preventDefault();
    e.target.remove();
  }
  body.addEventListener("click", remover);
}

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
{
  const textoGrande = document.querySelector('*');
  console.log(textoGrande);

  function clicaT(e){
    if(e.key === 't'){
      document.documentElement.classList.toggle('largeText');
    }
  }
  textoGrande.addEventListener('keydown', clicaT);
}
//documentElement = ao html