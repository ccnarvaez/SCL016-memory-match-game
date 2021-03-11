//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
// import pokemon from '../data/pokemon/pokemon.js';
// console.log(pokemon);
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//

//import WebDev from '../data/webdev/webdev.js';
//console.log(WebDev);

//import webdev from '../data/webdev/webdev.js';
//console.log(webdev.items[0]);
//let test= WebDev.items[0];
//const App = () => {
  //const el = document.createElement('test');

  //el.className = 'cards';
  //el.textContent = test.image; 
  //console.log(el);
  //return el;
  
//};

//Llamar componentes de cartas

import webdev from '../data/webdev/webdev.js';
//console.log(webdev.items[0]);
let test= webdev.items[0];
const App = () => {
  const el = document.createElement('test');

  el.className = 'cards';
  el.textContent ='js';
  console.log(el);
  return el;
  
};

// Fisher-yates algoritm

/*** Test "Array.from method": I need to create an array to work with 
 (I got an object with information and i need to call that information 
 to start fisher-yates algoritm).
 I will try "Array.from method". It defines a new array from an iterable object*/

let inputArray = Array.from(webdev.items);

// ***Agregar metodo para tomar elementos del array al azar***
inputArray.splice(4,6);// Our game just need 8 cards *** revisar funcionalidad para sustituir
console.log(inputArray);


let newArray =inputArray;
newArray[4]=inputArray[0];
newArray[5]=inputArray[1];
newArray[6]=inputArray[2];
newArray[7]=inputArray[3];

console.log(newArray);

export default App;
