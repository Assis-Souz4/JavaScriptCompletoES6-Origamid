const imgs = document.querySelectorAll("img");
imgs.forEach(function (img, index, array) {
  // console.log(img, index, array);
});

//forEach é um método de Array, alguns objetos array-like possuem este método. Caso não possuísse, o ideal é transformá-los em uma matriz.

const titulos = document.getElementsByClassName("titulo");
const titulosArray = Array.from(titulos);

titulosArray.forEach(function (item) {
  //   console.log(item);
});

//arrow
const imgs2 = document.querySelectorAll("img");

imgs2.forEach((img, index, array) => {
  console.log(img, index, array);
});
