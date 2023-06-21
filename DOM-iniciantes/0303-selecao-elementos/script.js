//https://www.origamid.com/slide/javascript-completo-es6/#/0301-o-que-e-o-dom/5

// Retorne o url da página atual utilizando o objeto window
function retornaUrl() {
  const body = window.document.querySelector("body");
  const url = location.href;
  console.log(url);
}
retornaUrl();

// Seleciona o primeiro elemento da página que
// possua a classe ativo
function procuraClasse(){
    const classe = document.querySelector('.ativo');
    console.log(classe);
}
procuraClasse();

// Retorne a linguagem do navegador
function idioma(){
    const lang = window.navigator.language;
    console.log(lang);
}
idioma();

// Retorne a largura da janela
function largura(){
    const width = window.innerWidth;
    console.log(width);
}
largura();