/* 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

1.3 Usa querySelector para mostrar por consola todos los p

1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
data-function="testMe".

1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe".
 */
// 1.1 
let button = document.querySelector(".showme");
console.log(button)
// 1.2
let showhOne = document.querySelector("#pillado");
console.log(showhOne)
// 1.3
let myP = document.querySelectorAll('p');
for (let index = 0; index < myP.length; index++) {
    console.log(myP[index].innerHTML);
}
// 1.4
let myPokemon = document.querySelectorAll('.pokemon');
const searchElement = ((list) => {
    list.forEach(element => {
        console.log(element.innerHTML)
    });
})
console.log(searchElement(myPokemon));

// 1.5
let testMe = document.querySelectorAll('[data-function="testMe"]');
console.log(searchElement(testMe));


// 1.6
console.log(testMe[2].innerHTML);


