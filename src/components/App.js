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
// 1. Array of objects which contents elements called from webdev components archive
let inputArray = Array.from(webdev.items); // This is an array which elements are objects
 
// 2. Choosing random elements from inputObject: random sort method

let sortedArray= inputArray.sort((a,b)=> 0.5-Math.random());

// 3. input array cut (we just need 4 components)
sortedArray.splice(4,6);
let spliceCounted= sortedArray.length-1;// this was done to solve my "out of memory" problem


//4. Full array with double elements. We need that to getting match cards
for (let j=0; j<=spliceCounted; j++){ 
  sortedArray[j+4]=sortedArray[j];
}

//5. Now, we are going to present sortedArray elements in random order: Fisher Yates  Algoritm


let fullArrayCounted= sortedArray.length;// this was done to solve my "out of memory" problem
   for (let k=0; k<fullArrayCounted; k++){

     // a. I got object in the position k
     let sortedArrayItem=sortedArray[k];

     // b. Now, determinate a random index
     let randomIndex=Math.floor(Math.random()*fullArrayCounted);

     // c. here we determinate item in the random position and replace original item in "k" position
     sortedArray[k]= sortedArray[randomIndex];
     sortedArray[randomIndex]=sortedArrayItem;
     
  
}
console.log(sortedArray);
console.log(sortedArray[0].id);


export default App;
